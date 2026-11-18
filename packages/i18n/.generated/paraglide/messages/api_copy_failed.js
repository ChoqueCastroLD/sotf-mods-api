/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Api_Copy_FailedInputs */

const en_api_copy_failed = /** @type {(inputs: Api_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't copy. Select the text and copy it by hand.`)
};

const es_api_copy_failed = /** @type {(inputs: Api_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo copiar. Selecciona el texto y cópialo a mano.`)
};

const de_api_copy_failed = /** @type {(inputs: Api_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopieren fehlgeschlagen. Markiere den Text und kopiere ihn von Hand.`)
};

const fr_api_copy_failed = /** @type {(inputs: Api_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copie impossible. Sélectionnez le texte et copiez-le à la main.`)
};

const it_api_copy_failed = /** @type {(inputs: Api_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile copiare. Seleziona il testo e copialo a mano.`)
};

const nl_api_copy_failed = /** @type {(inputs: Api_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiëren mislukt. Selecteer de tekst en kopieer hem handmatig.`)
};

const pl_api_copy_failed = /** @type {(inputs: Api_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się skopiować. Zaznacz tekst i skopiuj go ręcznie.`)
};

const pt_api_copy_failed = /** @type {(inputs: Api_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível copiar. Selecione o texto e copie manualmente.`)
};

const ru_api_copy_failed = /** @type {(inputs: Api_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось скопировать. Выделите текст и скопируйте вручную.`)
};

const sv_api_copy_failed = /** @type {(inputs: Api_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att kopiera. Markera texten och kopiera den för hand.`)
};

const tr_api_copy_failed = /** @type {(inputs: Api_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopyalanamadı. Metni seçip elle kopyala.`)
};

const zh_api_copy_failed = /** @type {(inputs: Api_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法复制，请选中文本手动复制。`)
};

const ja_api_copy_failed = /** @type {(inputs: Api_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コピーできませんでした。テキストを選択して手動でコピーしてください。`)
};

/**
* | output |
* | --- |
* | "Couldn't copy. Select the text and copy it by hand." |
*
* @param {Api_Copy_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const api_copy_failed = /** @type {((inputs?: Api_Copy_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Copy_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_api_copy_failed(inputs)
	if (locale === "de") return de_api_copy_failed(inputs)
	if (locale === "fr") return fr_api_copy_failed(inputs)
	if (locale === "it") return it_api_copy_failed(inputs)
	if (locale === "nl") return nl_api_copy_failed(inputs)
	if (locale === "pl") return pl_api_copy_failed(inputs)
	if (locale === "pt") return pt_api_copy_failed(inputs)
	if (locale === "ru") return ru_api_copy_failed(inputs)
	if (locale === "sv") return sv_api_copy_failed(inputs)
	if (locale === "tr") return tr_api_copy_failed(inputs)
	if (locale === "zh") return zh_api_copy_failed(inputs)
	if (locale === "ja") return ja_api_copy_failed(inputs)
	return en_api_copy_failed(inputs)
});
