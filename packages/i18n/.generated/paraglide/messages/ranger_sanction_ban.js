/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sanction_BanInputs */

const en_ranger_sanction_ban = /** @type {(inputs: Ranger_Sanction_BanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ban`)
};

const es_ranger_sanction_ban = /** @type {(inputs: Ranger_Sanction_BanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Banear`)
};

const de_ranger_sanction_ban = /** @type {(inputs: Ranger_Sanction_BanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sperren`)
};

const fr_ranger_sanction_ban = /** @type {(inputs: Ranger_Sanction_BanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bannir`)
};

const it_ranger_sanction_ban = /** @type {(inputs: Ranger_Sanction_BanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Banna`)
};

const nl_ranger_sanction_ban = /** @type {(inputs: Ranger_Sanction_BanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verbannen`)
};

const pl_ranger_sanction_ban = /** @type {(inputs: Ranger_Sanction_BanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zbanuj`)
};

const pt_ranger_sanction_ban = /** @type {(inputs: Ranger_Sanction_BanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Banir`)
};

const ru_ranger_sanction_ban = /** @type {(inputs: Ranger_Sanction_BanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Заблокировать`)
};

const sv_ranger_sanction_ban = /** @type {(inputs: Ranger_Sanction_BanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bannlys`)
};

const tr_ranger_sanction_ban = /** @type {(inputs: Ranger_Sanction_BanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yasakla`)
};

const zh_ranger_sanction_ban = /** @type {(inputs: Ranger_Sanction_BanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`封禁`)
};

const ja_ranger_sanction_ban = /** @type {(inputs: Ranger_Sanction_BanInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`BAN`)
};

/**
* | output |
* | --- |
* | "Ban" |
*
* @param {Ranger_Sanction_BanInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_ban = /** @type {((inputs?: Ranger_Sanction_BanInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_BanInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_ban(inputs)
	if (locale === "de") return de_ranger_sanction_ban(inputs)
	if (locale === "fr") return fr_ranger_sanction_ban(inputs)
	if (locale === "it") return it_ranger_sanction_ban(inputs)
	if (locale === "nl") return nl_ranger_sanction_ban(inputs)
	if (locale === "pl") return pl_ranger_sanction_ban(inputs)
	if (locale === "pt") return pt_ranger_sanction_ban(inputs)
	if (locale === "ru") return ru_ranger_sanction_ban(inputs)
	if (locale === "sv") return sv_ranger_sanction_ban(inputs)
	if (locale === "tr") return tr_ranger_sanction_ban(inputs)
	if (locale === "zh") return zh_ranger_sanction_ban(inputs)
	if (locale === "ja") return ja_ranger_sanction_ban(inputs)
	return en_ranger_sanction_ban(inputs)
});
