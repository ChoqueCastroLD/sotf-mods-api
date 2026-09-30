/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Copy_FailedInputs */

const en_kits_copy_failed = /** @type {(inputs: Kits_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t copy. Select the text and copy it by hand.`)
};

const es_kits_copy_failed = /** @type {(inputs: Kits_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se ha podido copiar. Selecciona el texto y cópialo a mano.`)
};

const de_kits_copy_failed = /** @type {(inputs: Kits_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopieren fehlgeschlagen. Markiere den Text und kopiere ihn von Hand.`)
};

const fr_kits_copy_failed = /** @type {(inputs: Kits_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de copier. Sélectionnez le texte et copiez-le à la main.`)
};

const it_kits_copy_failed = /** @type {(inputs: Kits_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile copiare. Seleziona il testo e copialo a mano.`)
};

const nl_kits_copy_failed = /** @type {(inputs: Kits_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiëren mislukt. Selecteer de tekst en kopieer hem zelf.`)
};

const pl_kits_copy_failed = /** @type {(inputs: Kits_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się skopiować. Zaznacz tekst i skopiuj go ręcznie.`)
};

const pt_kits_copy_failed = /** @type {(inputs: Kits_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível copiar. Selecione o texto e copie manualmente.`)
};

const ru_kits_copy_failed = /** @type {(inputs: Kits_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось скопировать. Выделите текст и скопируйте его вручную.`)
};

const sv_kits_copy_failed = /** @type {(inputs: Kits_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att kopiera. Markera texten och kopiera den själv.`)
};

const tr_kits_copy_failed = /** @type {(inputs: Kits_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopyalanamadı. Metni seçip elle kopyala.`)
};

const zh_kits_copy_failed = /** @type {(inputs: Kits_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制失败，请选中文本手动复制。`)
};

const ja_kits_copy_failed = /** @type {(inputs: Kits_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コピーできませんでした。テキストを選択して手動でコピーしてください。`)
};

/**
* | output |
* | --- |
* | "Couldn’t copy. Select the text and copy it by hand." |
*
* @param {Kits_Copy_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_copy_failed = /** @type {((inputs?: Kits_Copy_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Copy_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_copy_failed(inputs)
	if (locale === "de") return de_kits_copy_failed(inputs)
	if (locale === "fr") return fr_kits_copy_failed(inputs)
	if (locale === "it") return it_kits_copy_failed(inputs)
	if (locale === "nl") return nl_kits_copy_failed(inputs)
	if (locale === "pl") return pl_kits_copy_failed(inputs)
	if (locale === "pt") return pt_kits_copy_failed(inputs)
	if (locale === "ru") return ru_kits_copy_failed(inputs)
	if (locale === "sv") return sv_kits_copy_failed(inputs)
	if (locale === "tr") return tr_kits_copy_failed(inputs)
	if (locale === "zh") return zh_kits_copy_failed(inputs)
	if (locale === "ja") return ja_kits_copy_failed(inputs)
	return en_kits_copy_failed(inputs)
});
