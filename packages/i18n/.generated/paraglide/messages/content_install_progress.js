/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Install_ProgressInputs */

const en_content_install_progress = /** @type {(inputs: Content_Install_ProgressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reading progress`)
};

const es_content_install_progress = /** @type {(inputs: Content_Install_ProgressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Progreso de lectura`)
};

const de_content_install_progress = /** @type {(inputs: Content_Install_ProgressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lesefortschritt`)
};

const fr_content_install_progress = /** @type {(inputs: Content_Install_ProgressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Progression de la lecture`)
};

const it_content_install_progress = /** @type {(inputs: Content_Install_ProgressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avanzamento della lettura`)
};

const nl_content_install_progress = /** @type {(inputs: Content_Install_ProgressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leesvoortgang`)
};

const pl_content_install_progress = /** @type {(inputs: Content_Install_ProgressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Postęp czytania`)
};

const pt_content_install_progress = /** @type {(inputs: Content_Install_ProgressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Progresso da leitura`)
};

const ru_content_install_progress = /** @type {(inputs: Content_Install_ProgressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Прогресс чтения`)
};

const sv_content_install_progress = /** @type {(inputs: Content_Install_ProgressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läsförlopp`)
};

const tr_content_install_progress = /** @type {(inputs: Content_Install_ProgressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okuma ilerlemesi`)
};

const zh_content_install_progress = /** @type {(inputs: Content_Install_ProgressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`阅读进度`)
};

const ja_content_install_progress = /** @type {(inputs: Content_Install_ProgressInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`読み進み具合`)
};

/**
* | output |
* | --- |
* | "Reading progress" |
*
* @param {Content_Install_ProgressInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_install_progress = /** @type {((inputs?: Content_Install_ProgressInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Install_ProgressInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_install_progress(inputs)
	if (locale === "de") return de_content_install_progress(inputs)
	if (locale === "fr") return fr_content_install_progress(inputs)
	if (locale === "it") return it_content_install_progress(inputs)
	if (locale === "nl") return nl_content_install_progress(inputs)
	if (locale === "pl") return pl_content_install_progress(inputs)
	if (locale === "pt") return pt_content_install_progress(inputs)
	if (locale === "ru") return ru_content_install_progress(inputs)
	if (locale === "sv") return sv_content_install_progress(inputs)
	if (locale === "tr") return tr_content_install_progress(inputs)
	if (locale === "zh") return zh_content_install_progress(inputs)
	if (locale === "ja") return ja_content_install_progress(inputs)
	return en_content_install_progress(inputs)
});
