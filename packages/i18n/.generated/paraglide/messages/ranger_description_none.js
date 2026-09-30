/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Description_NoneInputs */

const en_ranger_description_none = /** @type {(inputs: Ranger_Description_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No text to show.`)
};

const es_ranger_description_none = /** @type {(inputs: Ranger_Description_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay texto que mostrar.`)
};

const de_ranger_description_none = /** @type {(inputs: Ranger_Description_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein Text vorhanden.`)
};

const fr_ranger_description_none = /** @type {(inputs: Ranger_Description_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun texte à afficher.`)
};

const it_ranger_description_none = /** @type {(inputs: Ranger_Description_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun testo da mostrare.`)
};

const nl_ranger_description_none = /** @type {(inputs: Ranger_Description_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen tekst om te tonen.`)
};

const pl_ranger_description_none = /** @type {(inputs: Ranger_Description_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak tekstu do pokazania.`)
};

const pt_ranger_description_none = /** @type {(inputs: Ranger_Description_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum texto para mostrar.`)
};

const ru_ranger_description_none = /** @type {(inputs: Ranger_Description_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет текста для показа.`)
};

const sv_ranger_description_none = /** @type {(inputs: Ranger_Description_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen text att visa.`)
};

const tr_ranger_description_none = /** @type {(inputs: Ranger_Description_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gösterilecek metin yok.`)
};

const zh_ranger_description_none = /** @type {(inputs: Ranger_Description_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有可显示的文字。`)
};

const ja_ranger_description_none = /** @type {(inputs: Ranger_Description_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表示するテキストがありません。`)
};

/**
* | output |
* | --- |
* | "No text to show." |
*
* @param {Ranger_Description_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_description_none = /** @type {((inputs?: Ranger_Description_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Description_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_description_none(inputs)
	if (locale === "de") return de_ranger_description_none(inputs)
	if (locale === "fr") return fr_ranger_description_none(inputs)
	if (locale === "it") return it_ranger_description_none(inputs)
	if (locale === "nl") return nl_ranger_description_none(inputs)
	if (locale === "pl") return pl_ranger_description_none(inputs)
	if (locale === "pt") return pt_ranger_description_none(inputs)
	if (locale === "ru") return ru_ranger_description_none(inputs)
	if (locale === "sv") return sv_ranger_description_none(inputs)
	if (locale === "tr") return tr_ranger_description_none(inputs)
	if (locale === "zh") return zh_ranger_description_none(inputs)
	if (locale === "ja") return ja_ranger_description_none(inputs)
	return en_ranger_description_none(inputs)
});
