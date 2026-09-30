/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_Spec_DownloadsInputs */

const en_builds_spec_downloads = /** @type {(inputs: Builds_Spec_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const es_builds_spec_downloads = /** @type {(inputs: Builds_Spec_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas`)
};

const de_builds_spec_downloads = /** @type {(inputs: Builds_Spec_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const fr_builds_spec_downloads = /** @type {(inputs: Builds_Spec_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements`)
};

const it_builds_spec_downloads = /** @type {(inputs: Builds_Spec_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download`)
};

const nl_builds_spec_downloads = /** @type {(inputs: Builds_Spec_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const pl_builds_spec_downloads = /** @type {(inputs: Builds_Spec_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania`)
};

const pt_builds_spec_downloads = /** @type {(inputs: Builds_Spec_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const ru_builds_spec_downloads = /** @type {(inputs: Builds_Spec_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скачивания`)
};

const sv_builds_spec_downloads = /** @type {(inputs: Builds_Spec_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar`)
};

const tr_builds_spec_downloads = /** @type {(inputs: Builds_Spec_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirmeler`)
};

const zh_builds_spec_downloads = /** @type {(inputs: Builds_Spec_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载量`)
};

const ja_builds_spec_downloads = /** @type {(inputs: Builds_Spec_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード数`)
};

/**
* | output |
* | --- |
* | "Downloads" |
*
* @param {Builds_Spec_DownloadsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_spec_downloads = /** @type {((inputs?: Builds_Spec_DownloadsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Spec_DownloadsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_spec_downloads(inputs)
	if (locale === "de") return de_builds_spec_downloads(inputs)
	if (locale === "fr") return fr_builds_spec_downloads(inputs)
	if (locale === "it") return it_builds_spec_downloads(inputs)
	if (locale === "nl") return nl_builds_spec_downloads(inputs)
	if (locale === "pl") return pl_builds_spec_downloads(inputs)
	if (locale === "pt") return pt_builds_spec_downloads(inputs)
	if (locale === "ru") return ru_builds_spec_downloads(inputs)
	if (locale === "sv") return sv_builds_spec_downloads(inputs)
	if (locale === "tr") return tr_builds_spec_downloads(inputs)
	if (locale === "zh") return zh_builds_spec_downloads(inputs)
	if (locale === "ja") return ja_builds_spec_downloads(inputs)
	return en_builds_spec_downloads(inputs)
});
