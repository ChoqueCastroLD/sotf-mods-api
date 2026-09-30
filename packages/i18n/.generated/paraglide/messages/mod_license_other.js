/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_License_OtherInputs */

const en_mod_license_other = /** @type {(inputs: Mod_License_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Custom license`)
};

const es_mod_license_other = /** @type {(inputs: Mod_License_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licencia propia`)
};

const de_mod_license_other = /** @type {(inputs: Mod_License_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eigene Lizenz`)
};

const fr_mod_license_other = /** @type {(inputs: Mod_License_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licence personnalisée`)
};

const it_mod_license_other = /** @type {(inputs: Mod_License_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licenza personalizzata`)
};

const nl_mod_license_other = /** @type {(inputs: Mod_License_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eigen licentie`)
};

const pl_mod_license_other = /** @type {(inputs: Mod_License_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Własna licencja`)
};

const pt_mod_license_other = /** @type {(inputs: Mod_License_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Licença própria`)
};

const ru_mod_license_other = /** @type {(inputs: Mod_License_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Своя лицензия`)
};

const sv_mod_license_other = /** @type {(inputs: Mod_License_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Egen licens`)
};

const tr_mod_license_other = /** @type {(inputs: Mod_License_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Özel lisans`)
};

const zh_mod_license_other = /** @type {(inputs: Mod_License_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自定义许可证`)
};

const ja_mod_license_other = /** @type {(inputs: Mod_License_OtherInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`独自ライセンス`)
};

/**
* | output |
* | --- |
* | "Custom license" |
*
* @param {Mod_License_OtherInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_license_other = /** @type {((inputs?: Mod_License_OtherInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_License_OtherInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_license_other(inputs)
	if (locale === "de") return de_mod_license_other(inputs)
	if (locale === "fr") return fr_mod_license_other(inputs)
	if (locale === "it") return it_mod_license_other(inputs)
	if (locale === "nl") return nl_mod_license_other(inputs)
	if (locale === "pl") return pl_mod_license_other(inputs)
	if (locale === "pt") return pt_mod_license_other(inputs)
	if (locale === "ru") return ru_mod_license_other(inputs)
	if (locale === "sv") return sv_mod_license_other(inputs)
	if (locale === "tr") return tr_mod_license_other(inputs)
	if (locale === "zh") return zh_mod_license_other(inputs)
	if (locale === "ja") return ja_mod_license_other(inputs)
	return en_mod_license_other(inputs)
});
