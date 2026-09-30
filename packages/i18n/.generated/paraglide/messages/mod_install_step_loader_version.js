/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Mod_Install_Step_Loader_VersionInputs */

const en_mod_install_step_loader_version = /** @type {(inputs: Mod_Install_Step_Loader_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Use RedLoader ${i?.version} or newer.`)
};

const es_mod_install_step_loader_version = /** @type {(inputs: Mod_Install_Step_Loader_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usa RedLoader ${i?.version} o posterior.`)
};

const de_mod_install_step_loader_version = /** @type {(inputs: Mod_Install_Step_Loader_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verwende RedLoader ${i?.version} oder neuer.`)
};

const fr_mod_install_step_loader_version = /** @type {(inputs: Mod_Install_Step_Loader_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Utilisez RedLoader ${i?.version} ou plus récent.`)
};

const it_mod_install_step_loader_version = /** @type {(inputs: Mod_Install_Step_Loader_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usa RedLoader ${i?.version} o successivo.`)
};

const nl_mod_install_step_loader_version = /** @type {(inputs: Mod_Install_Step_Loader_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gebruik RedLoader ${i?.version} of nieuwer.`)
};

const pl_mod_install_step_loader_version = /** @type {(inputs: Mod_Install_Step_Loader_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Użyj RedLoadera ${i?.version} lub nowszego.`)
};

const pt_mod_install_step_loader_version = /** @type {(inputs: Mod_Install_Step_Loader_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Use o RedLoader ${i?.version} ou mais recente.`)
};

const ru_mod_install_step_loader_version = /** @type {(inputs: Mod_Install_Step_Loader_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Нужен RedLoader ${i?.version} или новее.`)
};

const sv_mod_install_step_loader_version = /** @type {(inputs: Mod_Install_Step_Loader_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Använd RedLoader ${i?.version} eller senare.`)
};

const tr_mod_install_step_loader_version = /** @type {(inputs: Mod_Install_Step_Loader_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`RedLoader ${i?.version} veya daha yenisini kullan.`)
};

const zh_mod_install_step_loader_version = /** @type {(inputs: Mod_Install_Step_Loader_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`请使用 RedLoader ${i?.version} 或更高版本。`)
};

const ja_mod_install_step_loader_version = /** @type {(inputs: Mod_Install_Step_Loader_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`RedLoader ${i?.version} 以降を使ってください。`)
};

/**
* | output |
* | --- |
* | "Use RedLoader {version} or newer." |
*
* @param {Mod_Install_Step_Loader_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_install_step_loader_version = /** @type {((inputs: Mod_Install_Step_Loader_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_Step_Loader_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_install_step_loader_version(inputs)
	if (locale === "de") return de_mod_install_step_loader_version(inputs)
	if (locale === "fr") return fr_mod_install_step_loader_version(inputs)
	if (locale === "it") return it_mod_install_step_loader_version(inputs)
	if (locale === "nl") return nl_mod_install_step_loader_version(inputs)
	if (locale === "pl") return pl_mod_install_step_loader_version(inputs)
	if (locale === "pt") return pt_mod_install_step_loader_version(inputs)
	if (locale === "ru") return ru_mod_install_step_loader_version(inputs)
	if (locale === "sv") return sv_mod_install_step_loader_version(inputs)
	if (locale === "tr") return tr_mod_install_step_loader_version(inputs)
	if (locale === "zh") return zh_mod_install_step_loader_version(inputs)
	if (locale === "ja") return ja_mod_install_step_loader_version(inputs)
	return en_mod_install_step_loader_version(inputs)
});
