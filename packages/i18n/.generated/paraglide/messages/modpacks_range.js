/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ from: NonNullable<unknown>, to: NonNullable<unknown>, total: NonNullable<unknown> }} Modpacks_RangeInputs */

const en_modpacks_range = /** @type {(inputs: Modpacks_RangeInputs) => LocalizedString} */ (i) => {
	const from__number = registry.number("en", i?.from, {});
	const to__number = registry.number("en", i?.to, {});
	const total__number = registry.number("en", i?.total, {});return /** @type {LocalizedString} */ (`${from__number}–${to__number} of ${total__number}`)
};

const es_modpacks_range = /** @type {(inputs: Modpacks_RangeInputs) => LocalizedString} */ (i) => {
	const from__number = registry.number("es", i?.from, {});
	const to__number = registry.number("es", i?.to, {});
	const total__number = registry.number("es", i?.total, {});return /** @type {LocalizedString} */ (`${from__number}–${to__number} de ${total__number}`)
};

const de_modpacks_range = /** @type {(inputs: Modpacks_RangeInputs) => LocalizedString} */ (i) => {
	const from__number = registry.number("de", i?.from, {});
	const to__number = registry.number("de", i?.to, {});
	const total__number = registry.number("de", i?.total, {});return /** @type {LocalizedString} */ (`${from__number}–${to__number} von ${total__number}`)
};

const fr_modpacks_range = /** @type {(inputs: Modpacks_RangeInputs) => LocalizedString} */ (i) => {
	const from__number = registry.number("fr", i?.from, {});
	const to__number = registry.number("fr", i?.to, {});
	const total__number = registry.number("fr", i?.total, {});return /** @type {LocalizedString} */ (`${from__number}–${to__number} sur ${total__number}`)
};

const it_modpacks_range = /** @type {(inputs: Modpacks_RangeInputs) => LocalizedString} */ (i) => {
	const from__number = registry.number("it", i?.from, {});
	const to__number = registry.number("it", i?.to, {});
	const total__number = registry.number("it", i?.total, {});return /** @type {LocalizedString} */ (`${from__number}–${to__number} di ${total__number}`)
};

const nl_modpacks_range = /** @type {(inputs: Modpacks_RangeInputs) => LocalizedString} */ (i) => {
	const from__number = registry.number("nl", i?.from, {});
	const to__number = registry.number("nl", i?.to, {});
	const total__number = registry.number("nl", i?.total, {});return /** @type {LocalizedString} */ (`${from__number}–${to__number} van ${total__number}`)
};

const pl_modpacks_range = /** @type {(inputs: Modpacks_RangeInputs) => LocalizedString} */ (i) => {
	const from__number = registry.number("pl", i?.from, {});
	const to__number = registry.number("pl", i?.to, {});
	const total__number = registry.number("pl", i?.total, {});return /** @type {LocalizedString} */ (`${from__number}–${to__number} z ${total__number}`)
};

const pt_modpacks_range = /** @type {(inputs: Modpacks_RangeInputs) => LocalizedString} */ (i) => {
	const from__number = registry.number("pt", i?.from, {});
	const to__number = registry.number("pt", i?.to, {});
	const total__number = registry.number("pt", i?.total, {});return /** @type {LocalizedString} */ (`${from__number}–${to__number} de ${total__number}`)
};

const ru_modpacks_range = /** @type {(inputs: Modpacks_RangeInputs) => LocalizedString} */ (i) => {
	const from__number = registry.number("ru", i?.from, {});
	const to__number = registry.number("ru", i?.to, {});
	const total__number = registry.number("ru", i?.total, {});return /** @type {LocalizedString} */ (`${from__number}–${to__number} из ${total__number}`)
};

const sv_modpacks_range = /** @type {(inputs: Modpacks_RangeInputs) => LocalizedString} */ (i) => {
	const from__number = registry.number("sv", i?.from, {});
	const to__number = registry.number("sv", i?.to, {});
	const total__number = registry.number("sv", i?.total, {});return /** @type {LocalizedString} */ (`${from__number}–${to__number} av ${total__number}`)
};

const tr_modpacks_range = /** @type {(inputs: Modpacks_RangeInputs) => LocalizedString} */ (i) => {
	const from__number = registry.number("tr", i?.from, {});
	const to__number = registry.number("tr", i?.to, {});
	const total__number = registry.number("tr", i?.total, {});return /** @type {LocalizedString} */ (`${from__number}–${to__number} / ${total__number}`)
};

const zh_modpacks_range = /** @type {(inputs: Modpacks_RangeInputs) => LocalizedString} */ (i) => {
	const from__number = registry.number("zh", i?.from, {});
	const to__number = registry.number("zh", i?.to, {});
	const total__number = registry.number("zh", i?.total, {});return /** @type {LocalizedString} */ (`第 ${from__number}–${to__number} 个，共 ${total__number} 个`)
};

const ja_modpacks_range = /** @type {(inputs: Modpacks_RangeInputs) => LocalizedString} */ (i) => {
	const from__number = registry.number("ja", i?.from, {});
	const to__number = registry.number("ja", i?.to, {});
	const total__number = registry.number("ja", i?.total, {});return /** @type {LocalizedString} */ (`${total__number} 件中 ${from__number}–${to__number} 件`)
};

/**
* | output |
* | --- |
* | "{from__number}–{to__number} of {total__number}" |
*
* @param {Modpacks_RangeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_range = /** @type {((inputs: Modpacks_RangeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_RangeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_range(inputs)
	if (locale === "de") return de_modpacks_range(inputs)
	if (locale === "fr") return fr_modpacks_range(inputs)
	if (locale === "it") return it_modpacks_range(inputs)
	if (locale === "nl") return nl_modpacks_range(inputs)
	if (locale === "pl") return pl_modpacks_range(inputs)
	if (locale === "pt") return pt_modpacks_range(inputs)
	if (locale === "ru") return ru_modpacks_range(inputs)
	if (locale === "sv") return sv_modpacks_range(inputs)
	if (locale === "tr") return tr_modpacks_range(inputs)
	if (locale === "zh") return zh_modpacks_range(inputs)
	if (locale === "ja") return ja_modpacks_range(inputs)
	return en_modpacks_range(inputs)
});
