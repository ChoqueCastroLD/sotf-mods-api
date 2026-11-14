/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_New_3Inputs */

const en_manager_new_3 = /** @type {(inputs: Manager_New_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update everything with one button`)
};

const es_manager_new_3 = /** @type {(inputs: Manager_New_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualiza todo con un botón`)
};

const de_manager_new_3 = /** @type {(inputs: Manager_New_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles mit einem Klick aktualisieren`)
};

const fr_manager_new_3 = /** @type {(inputs: Manager_New_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout mettre à jour d’un bouton`)
};

const it_manager_new_3 = /** @type {(inputs: Manager_New_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiorna tutto con un pulsante`)
};

const nl_manager_new_3 = /** @type {(inputs: Manager_New_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werk alles bij met één knop`)
};

const pl_manager_new_3 = /** @type {(inputs: Manager_New_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktualizuj wszystko jednym przyciskiem`)
};

const pt_manager_new_3 = /** @type {(inputs: Manager_New_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualize tudo com um botão`)
};

const ru_manager_new_3 = /** @type {(inputs: Manager_New_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обновляйте всё одной кнопкой`)
};

const sv_manager_new_3 = /** @type {(inputs: Manager_New_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppdatera allt med en knapp`)
};

const tr_manager_new_3 = /** @type {(inputs: Manager_New_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her şeyi tek düğmeyle güncelle`)
};

const zh_manager_new_3 = /** @type {(inputs: Manager_New_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一键更新全部`)
};

const ja_manager_new_3 = /** @type {(inputs: Manager_New_3Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ボタンひとつで全部更新`)
};

/**
* | output |
* | --- |
* | "Update everything with one button" |
*
* @param {Manager_New_3Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_new_3 = /** @type {((inputs?: Manager_New_3Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_New_3Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_new_3(inputs)
	if (locale === "de") return de_manager_new_3(inputs)
	if (locale === "fr") return fr_manager_new_3(inputs)
	if (locale === "it") return it_manager_new_3(inputs)
	if (locale === "nl") return nl_manager_new_3(inputs)
	if (locale === "pl") return pl_manager_new_3(inputs)
	if (locale === "pt") return pt_manager_new_3(inputs)
	if (locale === "ru") return ru_manager_new_3(inputs)
	if (locale === "sv") return sv_manager_new_3(inputs)
	if (locale === "tr") return tr_manager_new_3(inputs)
	if (locale === "zh") return zh_manager_new_3(inputs)
	if (locale === "ja") return ja_manager_new_3(inputs)
	return en_manager_new_3(inputs)
});
