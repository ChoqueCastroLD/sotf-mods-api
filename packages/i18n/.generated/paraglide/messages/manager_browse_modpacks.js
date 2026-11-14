/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Browse_ModpacksInputs */

const en_manager_browse_modpacks = /** @type {(inputs: Manager_Browse_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Browse modpacks`)
};

const es_manager_browse_modpacks = /** @type {(inputs: Manager_Browse_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver modpacks`)
};

const de_manager_browse_modpacks = /** @type {(inputs: Manager_Browse_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks ansehen`)
};

const fr_manager_browse_modpacks = /** @type {(inputs: Manager_Browse_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voir les modpacks`)
};

const it_manager_browse_modpacks = /** @type {(inputs: Manager_Browse_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sfoglia i modpack`)
};

const nl_manager_browse_modpacks = /** @type {(inputs: Manager_Browse_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks bekijken`)
};

const pl_manager_browse_modpacks = /** @type {(inputs: Manager_Browse_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeglądaj modpacki`)
};

const pt_manager_browse_modpacks = /** @type {(inputs: Manager_Browse_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver modpacks`)
};

const ru_manager_browse_modpacks = /** @type {(inputs: Manager_Browse_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Смотреть модпаки`)
};

const sv_manager_browse_modpacks = /** @type {(inputs: Manager_Browse_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bläddra bland modpaket`)
};

const tr_manager_browse_modpacks = /** @type {(inputs: Manager_Browse_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod paketlerine göz at`)
};

const zh_manager_browse_modpacks = /** @type {(inputs: Manager_Browse_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`浏览整合包`)
};

const ja_manager_browse_modpacks = /** @type {(inputs: Manager_Browse_ModpacksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modパックを見る`)
};

/**
* | output |
* | --- |
* | "Browse modpacks" |
*
* @param {Manager_Browse_ModpacksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_browse_modpacks = /** @type {((inputs?: Manager_Browse_ModpacksInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Browse_ModpacksInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_browse_modpacks(inputs)
	if (locale === "de") return de_manager_browse_modpacks(inputs)
	if (locale === "fr") return fr_manager_browse_modpacks(inputs)
	if (locale === "it") return it_manager_browse_modpacks(inputs)
	if (locale === "nl") return nl_manager_browse_modpacks(inputs)
	if (locale === "pl") return pl_manager_browse_modpacks(inputs)
	if (locale === "pt") return pt_manager_browse_modpacks(inputs)
	if (locale === "ru") return ru_manager_browse_modpacks(inputs)
	if (locale === "sv") return sv_manager_browse_modpacks(inputs)
	if (locale === "tr") return tr_manager_browse_modpacks(inputs)
	if (locale === "zh") return zh_manager_browse_modpacks(inputs)
	if (locale === "ja") return ja_manager_browse_modpacks(inputs)
	return en_manager_browse_modpacks(inputs)
});
