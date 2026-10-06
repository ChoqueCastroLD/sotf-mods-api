/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Media_IntroInputs */

const en_upload_media_intro = /** @type {(inputs: Upload_Media_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Images help players decide. Listings with 3 or more images get more downloads.`)
};

const es_upload_media_intro = /** @type {(inputs: Upload_Media_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las imágenes ayudan a los jugadores a decidir. Las fichas con 3 imágenes o más reciben más descargas.`)
};

const de_upload_media_intro = /** @type {(inputs: Upload_Media_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilder helfen Spielern bei der Entscheidung. Einträge mit 3 oder mehr Bildern werden öfter heruntergeladen.`)
};

const fr_upload_media_intro = /** @type {(inputs: Upload_Media_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les images aident les joueurs à choisir. Les fiches avec 3 images ou plus sont plus téléchargées.`)
};

const it_upload_media_intro = /** @type {(inputs: Upload_Media_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le immagini aiutano i giocatori a decidere. Le schede con 3 o più immagini ricevono più download.`)
};

const nl_upload_media_intro = /** @type {(inputs: Upload_Media_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afbeeldingen helpen spelers kiezen. Vermeldingen met 3 of meer afbeeldingen worden vaker gedownload.`)
};

const pl_upload_media_intro = /** @type {(inputs: Upload_Media_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obrazy pomagają graczom zdecydować. Wpisy z 3 lub więcej obrazami są pobierane częściej.`)
};

const pt_upload_media_intro = /** @type {(inputs: Upload_Media_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As imagens ajudam os jogadores a decidir. Fichas com 3 imagens ou mais recebem mais downloads.`)
};

const ru_upload_media_intro = /** @type {(inputs: Upload_Media_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изображения помогают игрокам решить. Карточки с 3 и более изображениями скачивают чаще.`)
};

const sv_upload_media_intro = /** @type {(inputs: Upload_Media_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilder hjälper spelarna att välja. Sidor med 3 eller fler bilder laddas ner oftare.`)
};

const tr_upload_media_intro = /** @type {(inputs: Upload_Media_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görseller oyuncuların karar vermesine yardımcı olur. 3 veya daha fazla görseli olan sayfalar daha çok indirilir.`)
};

const zh_upload_media_intro = /** @type {(inputs: Upload_Media_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图片能帮助玩家做决定。有 3 张以上图片的页面下载量更高。`)
};

const ja_upload_media_intro = /** @type {(inputs: Upload_Media_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画像はプレイヤーが選ぶ助けになります。画像が3枚以上あるページはダウンロード数が増えます。`)
};

/**
* | output |
* | --- |
* | "Images help players decide. Listings with 3 or more images get more downloads." |
*
* @param {Upload_Media_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_media_intro = /** @type {((inputs?: Upload_Media_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Media_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_media_intro(inputs)
	if (locale === "de") return de_upload_media_intro(inputs)
	if (locale === "fr") return fr_upload_media_intro(inputs)
	if (locale === "it") return it_upload_media_intro(inputs)
	if (locale === "nl") return nl_upload_media_intro(inputs)
	if (locale === "pl") return pl_upload_media_intro(inputs)
	if (locale === "pt") return pt_upload_media_intro(inputs)
	if (locale === "ru") return ru_upload_media_intro(inputs)
	if (locale === "sv") return sv_upload_media_intro(inputs)
	if (locale === "tr") return tr_upload_media_intro(inputs)
	if (locale === "zh") return zh_upload_media_intro(inputs)
	if (locale === "ja") return ja_upload_media_intro(inputs)
	return en_upload_media_intro(inputs)
});
