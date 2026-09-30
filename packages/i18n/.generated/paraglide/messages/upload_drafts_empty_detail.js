/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Drafts_Empty_DetailInputs */

const en_upload_drafts_empty_detail = /** @type {(inputs: Upload_Drafts_Empty_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anything you start publishing is saved here until you submit it.`)
};

const es_upload_drafts_empty_detail = /** @type {(inputs: Upload_Drafts_Empty_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todo lo que empieces a publicar se guarda aquí hasta que lo envíes.`)
};

const de_upload_drafts_empty_detail = /** @type {(inputs: Upload_Drafts_Empty_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles, was du zu veröffentlichen beginnst, wird hier gespeichert, bis du es einreichst.`)
};

const fr_upload_drafts_empty_detail = /** @type {(inputs: Upload_Drafts_Empty_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout ce que vous commencez à publier est enregistré ici jusqu’à l’envoi.`)
};

const it_upload_drafts_empty_detail = /** @type {(inputs: Upload_Drafts_Empty_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutto ciò che inizi a pubblicare viene salvato qui finché non lo invii.`)
};

const nl_upload_drafts_empty_detail = /** @type {(inputs: Upload_Drafts_Empty_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles wat je begint te publiceren, wordt hier bewaard tot je het indient.`)
};

const pl_upload_drafts_empty_detail = /** @type {(inputs: Upload_Drafts_Empty_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystko, co zaczniesz publikować, zapisuje się tutaj do czasu wysłania.`)
};

const pt_upload_drafts_empty_detail = /** @type {(inputs: Upload_Drafts_Empty_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tudo o que você começar a publicar fica salvo aqui até ser enviado.`)
};

const ru_upload_drafts_empty_detail = /** @type {(inputs: Upload_Drafts_Empty_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Всё, что вы начнёте публиковать, хранится здесь до отправки.`)
};

const sv_upload_drafts_empty_detail = /** @type {(inputs: Upload_Drafts_Empty_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allt du börjar publicera sparas här tills du skickar in det.`)
};

const tr_upload_drafts_empty_detail = /** @type {(inputs: Upload_Drafts_Empty_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayınlamaya başladığın her şey gönderene kadar burada saklanır.`)
};

const zh_upload_drafts_empty_detail = /** @type {(inputs: Upload_Drafts_Empty_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你开始发布的内容都会保存在这里，直到提交为止。`)
};

const ja_upload_drafts_empty_detail = /** @type {(inputs: Upload_Drafts_Empty_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開を始めた内容は、送信するまでここに保存されます。`)
};

/**
* | output |
* | --- |
* | "Anything you start publishing is saved here until you submit it." |
*
* @param {Upload_Drafts_Empty_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_drafts_empty_detail = /** @type {((inputs?: Upload_Drafts_Empty_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Drafts_Empty_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_drafts_empty_detail(inputs)
	if (locale === "de") return de_upload_drafts_empty_detail(inputs)
	if (locale === "fr") return fr_upload_drafts_empty_detail(inputs)
	if (locale === "it") return it_upload_drafts_empty_detail(inputs)
	if (locale === "nl") return nl_upload_drafts_empty_detail(inputs)
	if (locale === "pl") return pl_upload_drafts_empty_detail(inputs)
	if (locale === "pt") return pt_upload_drafts_empty_detail(inputs)
	if (locale === "ru") return ru_upload_drafts_empty_detail(inputs)
	if (locale === "sv") return sv_upload_drafts_empty_detail(inputs)
	if (locale === "tr") return tr_upload_drafts_empty_detail(inputs)
	if (locale === "zh") return zh_upload_drafts_empty_detail(inputs)
	if (locale === "ja") return ja_upload_drafts_empty_detail(inputs)
	return en_upload_drafts_empty_detail(inputs)
});
