/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Dev_Legacy_DeviationsInputs */

const en_content_dev_legacy_deviations = /** @type {(inputs: Content_Dev_Legacy_DeviationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Intentional differences from the old behaviour`)
};

const es_content_dev_legacy_deviations = /** @type {(inputs: Content_Dev_Legacy_DeviationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diferencias intencionales con el comportamiento anterior`)
};

const de_content_dev_legacy_deviations = /** @type {(inputs: Content_Dev_Legacy_DeviationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewusste Abweichungen vom alten Verhalten`)
};

const fr_content_dev_legacy_deviations = /** @type {(inputs: Content_Dev_Legacy_DeviationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Différences volontaires avec l’ancien comportement`)
};

const it_content_dev_legacy_deviations = /** @type {(inputs: Content_Dev_Legacy_DeviationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Differenze intenzionali rispetto al comportamento precedente`)
};

const nl_content_dev_legacy_deviations = /** @type {(inputs: Content_Dev_Legacy_DeviationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewuste verschillen met het oude gedrag`)
};

const pl_content_dev_legacy_deviations = /** @type {(inputs: Content_Dev_Legacy_DeviationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Celowe różnice względem dawnego działania`)
};

const pt_content_dev_legacy_deviations = /** @type {(inputs: Content_Dev_Legacy_DeviationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diferenças intencionais em relação ao comportamento antigo`)
};

const ru_content_dev_legacy_deviations = /** @type {(inputs: Content_Dev_Legacy_DeviationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Намеренные отличия от прежнего поведения`)
};

const sv_content_dev_legacy_deviations = /** @type {(inputs: Content_Dev_Legacy_DeviationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avsiktliga skillnader mot det gamla beteendet`)
};

const tr_content_dev_legacy_deviations = /** @type {(inputs: Content_Dev_Legacy_DeviationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eski davranıştan bilinçli farklar`)
};

const zh_content_dev_legacy_deviations = /** @type {(inputs: Content_Dev_Legacy_DeviationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`与旧行为的有意差异`)
};

const ja_content_dev_legacy_deviations = /** @type {(inputs: Content_Dev_Legacy_DeviationsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`旧動作との意図的な違い`)
};

/**
* | output |
* | --- |
* | "Intentional differences from the old behaviour" |
*
* @param {Content_Dev_Legacy_DeviationsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_legacy_deviations = /** @type {((inputs?: Content_Dev_Legacy_DeviationsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Legacy_DeviationsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_legacy_deviations(inputs)
	if (locale === "de") return de_content_dev_legacy_deviations(inputs)
	if (locale === "fr") return fr_content_dev_legacy_deviations(inputs)
	if (locale === "it") return it_content_dev_legacy_deviations(inputs)
	if (locale === "nl") return nl_content_dev_legacy_deviations(inputs)
	if (locale === "pl") return pl_content_dev_legacy_deviations(inputs)
	if (locale === "pt") return pt_content_dev_legacy_deviations(inputs)
	if (locale === "ru") return ru_content_dev_legacy_deviations(inputs)
	if (locale === "sv") return sv_content_dev_legacy_deviations(inputs)
	if (locale === "tr") return tr_content_dev_legacy_deviations(inputs)
	if (locale === "zh") return zh_content_dev_legacy_deviations(inputs)
	if (locale === "ja") return ja_content_dev_legacy_deviations(inputs)
	return en_content_dev_legacy_deviations(inputs)
});
