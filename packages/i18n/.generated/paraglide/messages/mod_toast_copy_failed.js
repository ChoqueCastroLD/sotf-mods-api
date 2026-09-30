/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Toast_Copy_FailedInputs */

const en_mod_toast_copy_failed = /** @type {(inputs: Mod_Toast_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t copy. Select the text and copy it by hand.`)
};

const es_mod_toast_copy_failed = /** @type {(inputs: Mod_Toast_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo copiar. Selecciona el texto y cópialo a mano.`)
};

const de_mod_toast_copy_failed = /** @type {(inputs: Mod_Toast_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopieren fehlgeschlagen. Markiere den Text und kopiere ihn von Hand.`)
};

const fr_mod_toast_copy_failed = /** @type {(inputs: Mod_Toast_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copie impossible. Sélectionnez le texte et copiez-le à la main.`)
};

const it_mod_toast_copy_failed = /** @type {(inputs: Mod_Toast_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile copiare. Seleziona il testo e copialo a mano.`)
};

const nl_mod_toast_copy_failed = /** @type {(inputs: Mod_Toast_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiëren mislukt. Selecteer de tekst en kopieer hem zelf.`)
};

const pl_mod_toast_copy_failed = /** @type {(inputs: Mod_Toast_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się skopiować. Zaznacz tekst i skopiuj go ręcznie.`)
};

const pt_mod_toast_copy_failed = /** @type {(inputs: Mod_Toast_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível copiar. Selecione o texto e copie manualmente.`)
};

const ru_mod_toast_copy_failed = /** @type {(inputs: Mod_Toast_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось скопировать. Выделите текст и скопируйте вручную.`)
};

const sv_mod_toast_copy_failed = /** @type {(inputs: Mod_Toast_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte kopiera. Markera texten och kopiera den själv.`)
};

const tr_mod_toast_copy_failed = /** @type {(inputs: Mod_Toast_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopyalanamadı. Metni seçip elle kopyala.`)
};

const zh_mod_toast_copy_failed = /** @type {(inputs: Mod_Toast_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制失败，请选中文本手动复制。`)
};

const ja_mod_toast_copy_failed = /** @type {(inputs: Mod_Toast_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コピーできませんでした。テキストを選択して手動でコピーしてください。`)
};

/**
* | output |
* | --- |
* | "Couldn’t copy. Select the text and copy it by hand." |
*
* @param {Mod_Toast_Copy_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_toast_copy_failed = /** @type {((inputs?: Mod_Toast_Copy_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Toast_Copy_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_toast_copy_failed(inputs)
	if (locale === "de") return de_mod_toast_copy_failed(inputs)
	if (locale === "fr") return fr_mod_toast_copy_failed(inputs)
	if (locale === "it") return it_mod_toast_copy_failed(inputs)
	if (locale === "nl") return nl_mod_toast_copy_failed(inputs)
	if (locale === "pl") return pl_mod_toast_copy_failed(inputs)
	if (locale === "pt") return pt_mod_toast_copy_failed(inputs)
	if (locale === "ru") return ru_mod_toast_copy_failed(inputs)
	if (locale === "sv") return sv_mod_toast_copy_failed(inputs)
	if (locale === "tr") return tr_mod_toast_copy_failed(inputs)
	if (locale === "zh") return zh_mod_toast_copy_failed(inputs)
	if (locale === "ja") return ja_mod_toast_copy_failed(inputs)
	return en_mod_toast_copy_failed(inputs)
});
