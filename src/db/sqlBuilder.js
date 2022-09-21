

async function insertInLogtable(model, status,httpStatusCode) {
      const item = await model.create({
        response_text: status,
        response_status:httpStatusCode
      });
      return { item, created: false };
  }


  module.exports = {
    insertInLogtable
  }