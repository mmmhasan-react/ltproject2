import mongoose from 'mongoose';
import config from './app/config';
import app from './app';
async function main() {
  try {
    await mongoose.connect(config.db_url as string);

    app.listen(config.port, () => {
      console.log(`Example app listening on port 5000 ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
