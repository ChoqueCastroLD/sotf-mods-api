/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, max: NonNullable<unknown> }} Settings_Pinned_CountInputs */

const en_settings_pinned_count = /** @type {(inputs: Settings_Pinned_CountInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("en", i?.count, {});
	const max__number = registry.number("en", i?.max, {});return /** @type {LocalizedString} */ (`${count__number} of ${max__number} pinned`)
};

const es_settings_pinned_count = /** @type {(inputs: Settings_Pinned_CountInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("es", i?.count, {});
	const max__number = registry.number("es", i?.max, {});return /** @type {LocalizedString} */ (`${count__number} de ${max__number} fijados`)
};

const de_settings_pinned_count = /** @type {(inputs: Settings_Pinned_CountInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("de", i?.count, {});
	const max__number = registry.number("de", i?.max, {});return /** @type {LocalizedString} */ (`${count__number} von ${max__number} angeheftet`)
};

const fr_settings_pinned_count = /** @type {(inputs: Settings_Pinned_CountInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("fr", i?.count, {});
	const max__number = registry.number("fr", i?.max, {});return /** @type {LocalizedString} */ (`${count__number} sur ${max__number} épinglés`)
};

const it_settings_pinned_count = /** @type {(inputs: Settings_Pinned_CountInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("it", i?.count, {});
	const max__number = registry.number("it", i?.max, {});return /** @type {LocalizedString} */ (`${count__number} di ${max__number} in evidenza`)
};

const nl_settings_pinned_count = /** @type {(inputs: Settings_Pinned_CountInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("nl", i?.count, {});
	const max__number = registry.number("nl", i?.max, {});return /** @type {LocalizedString} */ (`${count__number} van ${max__number} vastgezet`)
};

const pl_settings_pinned_count = /** @type {(inputs: Settings_Pinned_CountInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("pl", i?.count, {});
	const max__number = registry.number("pl", i?.max, {});return /** @type {LocalizedString} */ (`Przypięto ${count__number} z ${max__number}`)
};

const pt_settings_pinned_count = /** @type {(inputs: Settings_Pinned_CountInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("pt", i?.count, {});
	const max__number = registry.number("pt", i?.max, {});return /** @type {LocalizedString} */ (`${count__number} de ${max__number} fixados`)
};

const ru_settings_pinned_count = /** @type {(inputs: Settings_Pinned_CountInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("ru", i?.count, {});
	const max__number = registry.number("ru", i?.max, {});return /** @type {LocalizedString} */ (`Закреплено ${count__number} из ${max__number}`)
};

const sv_settings_pinned_count = /** @type {(inputs: Settings_Pinned_CountInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("sv", i?.count, {});
	const max__number = registry.number("sv", i?.max, {});return /** @type {LocalizedString} */ (`${count__number} av ${max__number} fästa`)
};

const tr_settings_pinned_count = /** @type {(inputs: Settings_Pinned_CountInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("tr", i?.count, {});
	const max__number = registry.number("tr", i?.max, {});return /** @type {LocalizedString} */ (`${max__number} moddan ${count__number} tanesi sabitlendi`)
};

const zh_settings_pinned_count = /** @type {(inputs: Settings_Pinned_CountInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("zh", i?.count, {});
	const max__number = registry.number("zh", i?.max, {});return /** @type {LocalizedString} */ (`已置顶 ${count__number}/${max__number}`)
};

const ja_settings_pinned_count = /** @type {(inputs: Settings_Pinned_CountInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("ja", i?.count, {});
	const max__number = registry.number("ja", i?.max, {});return /** @type {LocalizedString} */ (`${max__number} 個中 ${count__number} 個を固定`)
};

/**
* | output |
* | --- |
* | "{count__number} of {max__number} pinned" |
*
* @param {Settings_Pinned_CountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_pinned_count = /** @type {((inputs: Settings_Pinned_CountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Pinned_CountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_pinned_count(inputs)
	if (locale === "de") return de_settings_pinned_count(inputs)
	if (locale === "fr") return fr_settings_pinned_count(inputs)
	if (locale === "it") return it_settings_pinned_count(inputs)
	if (locale === "nl") return nl_settings_pinned_count(inputs)
	if (locale === "pl") return pl_settings_pinned_count(inputs)
	if (locale === "pt") return pt_settings_pinned_count(inputs)
	if (locale === "ru") return ru_settings_pinned_count(inputs)
	if (locale === "sv") return sv_settings_pinned_count(inputs)
	if (locale === "tr") return tr_settings_pinned_count(inputs)
	if (locale === "zh") return zh_settings_pinned_count(inputs)
	if (locale === "ja") return ja_settings_pinned_count(inputs)
	return en_settings_pinned_count(inputs)
});
