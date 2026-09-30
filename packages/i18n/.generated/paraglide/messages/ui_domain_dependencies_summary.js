/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ required: NonNullable<unknown>, optional: NonNullable<unknown> }} Ui_Domain_Dependencies_SummaryInputs */

const en_ui_domain_dependencies_summary = /** @type {(inputs: Ui_Domain_Dependencies_SummaryInputs) => LocalizedString} */ (i) => {
	const required__number = registry.number("en", i?.required, {});
	const optional__number = registry.number("en", i?.optional, {});return /** @type {LocalizedString} */ (`${required__number} required · ${optional__number} optional`)
};

const es_ui_domain_dependencies_summary = /** @type {(inputs: Ui_Domain_Dependencies_SummaryInputs) => LocalizedString} */ (i) => {
	const required__number = registry.number("es", i?.required, {});
	const optional__number = registry.number("es", i?.optional, {});return /** @type {LocalizedString} */ (`${required__number} obligatorias · ${optional__number} opcionales`)
};

const de_ui_domain_dependencies_summary = /** @type {(inputs: Ui_Domain_Dependencies_SummaryInputs) => LocalizedString} */ (i) => {
	const required__number = registry.number("de", i?.required, {});
	const optional__number = registry.number("de", i?.optional, {});return /** @type {LocalizedString} */ (`${required__number} erforderlich · ${optional__number} optional`)
};

const fr_ui_domain_dependencies_summary = /** @type {(inputs: Ui_Domain_Dependencies_SummaryInputs) => LocalizedString} */ (i) => {
	const required__number = registry.number("fr", i?.required, {});
	const optional__number = registry.number("fr", i?.optional, {});return /** @type {LocalizedString} */ (`${required__number} requises · ${optional__number} facultatives`)
};

const it_ui_domain_dependencies_summary = /** @type {(inputs: Ui_Domain_Dependencies_SummaryInputs) => LocalizedString} */ (i) => {
	const required__number = registry.number("it", i?.required, {});
	const optional__number = registry.number("it", i?.optional, {});return /** @type {LocalizedString} */ (`${required__number} obbligatorie · ${optional__number} facoltative`)
};

const nl_ui_domain_dependencies_summary = /** @type {(inputs: Ui_Domain_Dependencies_SummaryInputs) => LocalizedString} */ (i) => {
	const required__number = registry.number("nl", i?.required, {});
	const optional__number = registry.number("nl", i?.optional, {});return /** @type {LocalizedString} */ (`${required__number} vereist · ${optional__number} optioneel`)
};

const pl_ui_domain_dependencies_summary = /** @type {(inputs: Ui_Domain_Dependencies_SummaryInputs) => LocalizedString} */ (i) => {
	const required__number = registry.number("pl", i?.required, {});
	const optional__number = registry.number("pl", i?.optional, {});return /** @type {LocalizedString} */ (`wymagane: ${required__number} · opcjonalne: ${optional__number}`)
};

const pt_ui_domain_dependencies_summary = /** @type {(inputs: Ui_Domain_Dependencies_SummaryInputs) => LocalizedString} */ (i) => {
	const required__number = registry.number("pt", i?.required, {});
	const optional__number = registry.number("pt", i?.optional, {});return /** @type {LocalizedString} */ (`${required__number} obrigatórias · ${optional__number} opcionais`)
};

const ru_ui_domain_dependencies_summary = /** @type {(inputs: Ui_Domain_Dependencies_SummaryInputs) => LocalizedString} */ (i) => {
	const required__number = registry.number("ru", i?.required, {});
	const optional__number = registry.number("ru", i?.optional, {});return /** @type {LocalizedString} */ (`обязательных: ${required__number} · необязательных: ${optional__number}`)
};

const sv_ui_domain_dependencies_summary = /** @type {(inputs: Ui_Domain_Dependencies_SummaryInputs) => LocalizedString} */ (i) => {
	const required__number = registry.number("sv", i?.required, {});
	const optional__number = registry.number("sv", i?.optional, {});return /** @type {LocalizedString} */ (`${required__number} krävs · ${optional__number} valfria`)
};

const tr_ui_domain_dependencies_summary = /** @type {(inputs: Ui_Domain_Dependencies_SummaryInputs) => LocalizedString} */ (i) => {
	const required__number = registry.number("tr", i?.required, {});
	const optional__number = registry.number("tr", i?.optional, {});return /** @type {LocalizedString} */ (`${required__number} zorunlu · ${optional__number} isteğe bağlı`)
};

const zh_ui_domain_dependencies_summary = /** @type {(inputs: Ui_Domain_Dependencies_SummaryInputs) => LocalizedString} */ (i) => {
	const required__number = registry.number("zh", i?.required, {});
	const optional__number = registry.number("zh", i?.optional, {});return /** @type {LocalizedString} */ (`${required__number} 个必需 · ${optional__number} 个可选`)
};

const ja_ui_domain_dependencies_summary = /** @type {(inputs: Ui_Domain_Dependencies_SummaryInputs) => LocalizedString} */ (i) => {
	const required__number = registry.number("ja", i?.required, {});
	const optional__number = registry.number("ja", i?.optional, {});return /** @type {LocalizedString} */ (`必須 ${required__number} 件 · 任意 ${optional__number} 件`)
};

/**
* | output |
* | --- |
* | "{required__number} required · {optional__number} optional" |
*
* @param {Ui_Domain_Dependencies_SummaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_dependencies_summary = /** @type {((inputs: Ui_Domain_Dependencies_SummaryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Dependencies_SummaryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_dependencies_summary(inputs)
	if (locale === "de") return de_ui_domain_dependencies_summary(inputs)
	if (locale === "fr") return fr_ui_domain_dependencies_summary(inputs)
	if (locale === "it") return it_ui_domain_dependencies_summary(inputs)
	if (locale === "nl") return nl_ui_domain_dependencies_summary(inputs)
	if (locale === "pl") return pl_ui_domain_dependencies_summary(inputs)
	if (locale === "pt") return pt_ui_domain_dependencies_summary(inputs)
	if (locale === "ru") return ru_ui_domain_dependencies_summary(inputs)
	if (locale === "sv") return sv_ui_domain_dependencies_summary(inputs)
	if (locale === "tr") return tr_ui_domain_dependencies_summary(inputs)
	if (locale === "zh") return zh_ui_domain_dependencies_summary(inputs)
	if (locale === "ja") return ja_ui_domain_dependencies_summary(inputs)
	return en_ui_domain_dependencies_summary(inputs)
});
