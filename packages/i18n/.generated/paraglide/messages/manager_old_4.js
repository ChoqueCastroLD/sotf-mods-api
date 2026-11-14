/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Old_4Inputs */

const en_manager_old_4 = /** @type {(inputs: Manager_Old_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Repeat all of it for every update`)
};

const es_manager_old_4 = /** @type {(inputs: Manager_Old_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Repetirlo todo en cada actualización`)
};

const de_manager_old_4 = /** @type {(inputs: Manager_Old_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bei jedem Update alles wiederholen`)
};

const fr_manager_old_4 = /** @type {(inputs: Manager_Old_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout recommencer à chaque mise à jour`)
};

const it_manager_old_4 = /** @type {(inputs: Manager_Old_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ripetere tutto a ogni aggiornamento`)
};

const nl_manager_old_4 = /** @type {(inputs: Manager_Old_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles herhalen bij elke update`)
};

const pl_manager_old_4 = /** @type {(inputs: Manager_Old_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powtarzać wszystko przy każdej aktualizacji`)
};

const pt_manager_old_4 = /** @type {(inputs: Manager_Old_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Repetir tudo a cada atualização`)
};

const ru_manager_old_4 = /** @type {(inputs: Manager_Old_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Повторять всё при каждом обновлении`)
};

const sv_manager_old_4 = /** @type {(inputs: Manager_Old_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upprepa allt vid varje uppdatering`)
};

const tr_manager_old_4 = /** @type {(inputs: Manager_Old_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her güncellemede hepsini tekrarla`)
};

const zh_manager_old_4 = /** @type {(inputs: Manager_Old_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每次更新都重来一遍`)
};

const ja_manager_old_4 = /** @type {(inputs: Manager_Old_4Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新のたびにすべてやり直し`)
};

/**
* | output |
* | --- |
* | "Repeat all of it for every update" |
*
* @param {Manager_Old_4Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_old_4 = /** @type {((inputs?: Manager_Old_4Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Old_4Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_old_4(inputs)
	if (locale === "de") return de_manager_old_4(inputs)
	if (locale === "fr") return fr_manager_old_4(inputs)
	if (locale === "it") return it_manager_old_4(inputs)
	if (locale === "nl") return nl_manager_old_4(inputs)
	if (locale === "pl") return pl_manager_old_4(inputs)
	if (locale === "pt") return pt_manager_old_4(inputs)
	if (locale === "ru") return ru_manager_old_4(inputs)
	if (locale === "sv") return sv_manager_old_4(inputs)
	if (locale === "tr") return tr_manager_old_4(inputs)
	if (locale === "zh") return zh_manager_old_4(inputs)
	if (locale === "ja") return ja_manager_old_4(inputs)
	return en_manager_old_4(inputs)
});
