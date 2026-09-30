/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Version_YankedInputs */

const en_mod_version_yanked = /** @type {(inputs: Mod_Version_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Withdrawn`)
};

const es_mod_version_yanked = /** @type {(inputs: Mod_Version_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirada`)
};

const de_mod_version_yanked = /** @type {(inputs: Mod_Version_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurückgezogen`)
};

const fr_mod_version_yanked = /** @type {(inputs: Mod_Version_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirée`)
};

const it_mod_version_yanked = /** @type {(inputs: Mod_Version_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ritirata`)
};

const nl_mod_version_yanked = /** @type {(inputs: Mod_Version_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingetrokken`)
};

const pl_mod_version_yanked = /** @type {(inputs: Mod_Version_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wycofana`)
};

const pt_mod_version_yanked = /** @type {(inputs: Mod_Version_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirada`)
};

const ru_mod_version_yanked = /** @type {(inputs: Mod_Version_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отозвана`)
};

const sv_mod_version_yanked = /** @type {(inputs: Mod_Version_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Indragen`)
};

const tr_mod_version_yanked = /** @type {(inputs: Mod_Version_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geri çekildi`)
};

const zh_mod_version_yanked = /** @type {(inputs: Mod_Version_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已撤回`)
};

const ja_mod_version_yanked = /** @type {(inputs: Mod_Version_YankedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取り下げ`)
};

/**
* | output |
* | --- |
* | "Withdrawn" |
*
* @param {Mod_Version_YankedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_version_yanked = /** @type {((inputs?: Mod_Version_YankedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Version_YankedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_version_yanked(inputs)
	if (locale === "de") return de_mod_version_yanked(inputs)
	if (locale === "fr") return fr_mod_version_yanked(inputs)
	if (locale === "it") return it_mod_version_yanked(inputs)
	if (locale === "nl") return nl_mod_version_yanked(inputs)
	if (locale === "pl") return pl_mod_version_yanked(inputs)
	if (locale === "pt") return pt_mod_version_yanked(inputs)
	if (locale === "ru") return ru_mod_version_yanked(inputs)
	if (locale === "sv") return sv_mod_version_yanked(inputs)
	if (locale === "tr") return tr_mod_version_yanked(inputs)
	if (locale === "zh") return zh_mod_version_yanked(inputs)
	if (locale === "ja") return ja_mod_version_yanked(inputs)
	return en_mod_version_yanked(inputs)
});
