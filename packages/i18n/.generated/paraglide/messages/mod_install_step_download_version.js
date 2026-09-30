/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, version: NonNullable<unknown> }} Mod_Install_Step_Download_VersionInputs */

const en_mod_install_step_download_version = /** @type {(inputs: Mod_Install_Step_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Download ${i?.name} v${i?.version}`)
};

const es_mod_install_step_download_version = /** @type {(inputs: Mod_Install_Step_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descarga ${i?.name} v${i?.version}`)
};

const de_mod_install_step_download_version = /** @type {(inputs: Mod_Install_Step_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} v${i?.version} herunterladen`)
};

const fr_mod_install_step_download_version = /** @type {(inputs: Mod_Install_Step_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Téléchargez ${i?.name} v${i?.version}`)
};

const it_mod_install_step_download_version = /** @type {(inputs: Mod_Install_Step_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Scarica ${i?.name} v${i?.version}`)
};

const nl_mod_install_step_download_version = /** @type {(inputs: Mod_Install_Step_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Download ${i?.name} v${i?.version}`)
};

const pl_mod_install_step_download_version = /** @type {(inputs: Mod_Install_Step_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pobierz ${i?.name} v${i?.version}`)
};

const pt_mod_install_step_download_version = /** @type {(inputs: Mod_Install_Step_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Baixe ${i?.name} v${i?.version}`)
};

const ru_mod_install_step_download_version = /** @type {(inputs: Mod_Install_Step_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Скачайте ${i?.name} v${i?.version}`)
};

const sv_mod_install_step_download_version = /** @type {(inputs: Mod_Install_Step_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ladda ner ${i?.name} v${i?.version}`)
};

const tr_mod_install_step_download_version = /** @type {(inputs: Mod_Install_Step_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} v${i?.version} indir`)
};

const zh_mod_install_step_download_version = /** @type {(inputs: Mod_Install_Step_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`下载 ${i?.name} v${i?.version}`)
};

const ja_mod_install_step_download_version = /** @type {(inputs: Mod_Install_Step_Download_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} v${i?.version} をダウンロード`)
};

/**
* | output |
* | --- |
* | "Download {name} v{version}" |
*
* @param {Mod_Install_Step_Download_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_install_step_download_version = /** @type {((inputs: Mod_Install_Step_Download_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_Step_Download_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_install_step_download_version(inputs)
	if (locale === "de") return de_mod_install_step_download_version(inputs)
	if (locale === "fr") return fr_mod_install_step_download_version(inputs)
	if (locale === "it") return it_mod_install_step_download_version(inputs)
	if (locale === "nl") return nl_mod_install_step_download_version(inputs)
	if (locale === "pl") return pl_mod_install_step_download_version(inputs)
	if (locale === "pt") return pt_mod_install_step_download_version(inputs)
	if (locale === "ru") return ru_mod_install_step_download_version(inputs)
	if (locale === "sv") return sv_mod_install_step_download_version(inputs)
	if (locale === "tr") return tr_mod_install_step_download_version(inputs)
	if (locale === "zh") return zh_mod_install_step_download_version(inputs)
	if (locale === "ja") return ja_mod_install_step_download_version(inputs)
	return en_mod_install_step_download_version(inputs)
});
