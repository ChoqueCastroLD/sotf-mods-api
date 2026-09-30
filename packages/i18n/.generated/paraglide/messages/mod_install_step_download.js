/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Mod_Install_Step_DownloadInputs */

const en_mod_install_step_download = /** @type {(inputs: Mod_Install_Step_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Download ${i?.name}`)
};

const es_mod_install_step_download = /** @type {(inputs: Mod_Install_Step_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descarga ${i?.name}`)
};

const de_mod_install_step_download = /** @type {(inputs: Mod_Install_Step_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} herunterladen`)
};

const fr_mod_install_step_download = /** @type {(inputs: Mod_Install_Step_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Téléchargez ${i?.name}`)
};

const it_mod_install_step_download = /** @type {(inputs: Mod_Install_Step_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Scarica ${i?.name}`)
};

const nl_mod_install_step_download = /** @type {(inputs: Mod_Install_Step_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Download ${i?.name}`)
};

const pl_mod_install_step_download = /** @type {(inputs: Mod_Install_Step_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pobierz ${i?.name}`)
};

const pt_mod_install_step_download = /** @type {(inputs: Mod_Install_Step_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Baixe ${i?.name}`)
};

const ru_mod_install_step_download = /** @type {(inputs: Mod_Install_Step_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Скачайте ${i?.name}`)
};

const sv_mod_install_step_download = /** @type {(inputs: Mod_Install_Step_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ladda ner ${i?.name}`)
};

const tr_mod_install_step_download = /** @type {(inputs: Mod_Install_Step_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} indir`)
};

const zh_mod_install_step_download = /** @type {(inputs: Mod_Install_Step_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`下载 ${i?.name}`)
};

const ja_mod_install_step_download = /** @type {(inputs: Mod_Install_Step_DownloadInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} をダウンロード`)
};

/**
* | output |
* | --- |
* | "Download {name}" |
*
* @param {Mod_Install_Step_DownloadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_install_step_download = /** @type {((inputs: Mod_Install_Step_DownloadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_Step_DownloadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_install_step_download(inputs)
	if (locale === "de") return de_mod_install_step_download(inputs)
	if (locale === "fr") return fr_mod_install_step_download(inputs)
	if (locale === "it") return it_mod_install_step_download(inputs)
	if (locale === "nl") return nl_mod_install_step_download(inputs)
	if (locale === "pl") return pl_mod_install_step_download(inputs)
	if (locale === "pt") return pt_mod_install_step_download(inputs)
	if (locale === "ru") return ru_mod_install_step_download(inputs)
	if (locale === "sv") return sv_mod_install_step_download(inputs)
	if (locale === "tr") return tr_mod_install_step_download(inputs)
	if (locale === "zh") return zh_mod_install_step_download(inputs)
	if (locale === "ja") return ja_mod_install_step_download(inputs)
	return en_mod_install_step_download(inputs)
});
