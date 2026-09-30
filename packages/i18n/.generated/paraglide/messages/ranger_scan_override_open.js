/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Scan_Override_OpenInputs */

const en_ranger_scan_override_open = /** @type {(inputs: Ranger_Scan_Override_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Override verdict`)
};

const es_ranger_scan_override_open = /** @type {(inputs: Ranger_Scan_Override_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambiar veredicto`)
};

const de_ranger_scan_override_open = /** @type {(inputs: Ranger_Scan_Override_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Urteil ändern`)
};

const fr_ranger_scan_override_open = /** @type {(inputs: Ranger_Scan_Override_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier le verdict`)
};

const it_ranger_scan_override_open = /** @type {(inputs: Ranger_Scan_Override_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambia verdetto`)
};

const nl_ranger_scan_override_open = /** @type {(inputs: Ranger_Scan_Override_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oordeel wijzigen`)
};

const pl_ranger_scan_override_open = /** @type {(inputs: Ranger_Scan_Override_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmień werdykt`)
};

const pt_ranger_scan_override_open = /** @type {(inputs: Ranger_Scan_Override_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alterar veredito`)
};

const ru_ranger_scan_override_open = /** @type {(inputs: Ranger_Scan_Override_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изменить вердикт`)
};

const sv_ranger_scan_override_open = /** @type {(inputs: Ranger_Scan_Override_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ändra utlåtande`)
};

const tr_ranger_scan_override_open = /** @type {(inputs: Ranger_Scan_Override_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kararı değiştir`)
};

const zh_ranger_scan_override_open = /** @type {(inputs: Ranger_Scan_Override_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更改判定`)
};

const ja_ranger_scan_override_open = /** @type {(inputs: Ranger_Scan_Override_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`判定を変更`)
};

/**
* | output |
* | --- |
* | "Override verdict" |
*
* @param {Ranger_Scan_Override_OpenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_scan_override_open = /** @type {((inputs?: Ranger_Scan_Override_OpenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Scan_Override_OpenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_scan_override_open(inputs)
	if (locale === "de") return de_ranger_scan_override_open(inputs)
	if (locale === "fr") return fr_ranger_scan_override_open(inputs)
	if (locale === "it") return it_ranger_scan_override_open(inputs)
	if (locale === "nl") return nl_ranger_scan_override_open(inputs)
	if (locale === "pl") return pl_ranger_scan_override_open(inputs)
	if (locale === "pt") return pt_ranger_scan_override_open(inputs)
	if (locale === "ru") return ru_ranger_scan_override_open(inputs)
	if (locale === "sv") return sv_ranger_scan_override_open(inputs)
	if (locale === "tr") return tr_ranger_scan_override_open(inputs)
	if (locale === "zh") return zh_ranger_scan_override_open(inputs)
	if (locale === "ja") return ja_ranger_scan_override_open(inputs)
	return en_ranger_scan_override_open(inputs)
});
