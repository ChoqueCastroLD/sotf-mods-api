/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Mod_Required_By_MoreInputs */

const en_mod_required_by_more = /** @type {(inputs: Mod_Required_By_MoreInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("en", i?.count, {});return /** @type {LocalizedString} */ (`And ${count__number} more`)
};

const es_mod_required_by_more = /** @type {(inputs: Mod_Required_By_MoreInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("es", i?.count, {});return /** @type {LocalizedString} */ (`Y ${count__number} más`)
};

const de_mod_required_by_more = /** @type {(inputs: Mod_Required_By_MoreInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("de", i?.count, {});return /** @type {LocalizedString} */ (`Und ${count__number} weitere`)
};

const fr_mod_required_by_more = /** @type {(inputs: Mod_Required_By_MoreInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("fr", i?.count, {});return /** @type {LocalizedString} */ (`Et ${count__number} de plus`)
};

const it_mod_required_by_more = /** @type {(inputs: Mod_Required_By_MoreInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("it", i?.count, {});return /** @type {LocalizedString} */ (`E altre ${count__number}`)
};

const nl_mod_required_by_more = /** @type {(inputs: Mod_Required_By_MoreInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("nl", i?.count, {});return /** @type {LocalizedString} */ (`En nog ${count__number}`)
};

const pl_mod_required_by_more = /** @type {(inputs: Mod_Required_By_MoreInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("pl", i?.count, {});return /** @type {LocalizedString} */ (`I jeszcze ${count__number}`)
};

const pt_mod_required_by_more = /** @type {(inputs: Mod_Required_By_MoreInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("pt", i?.count, {});return /** @type {LocalizedString} */ (`E mais ${count__number}`)
};

const ru_mod_required_by_more = /** @type {(inputs: Mod_Required_By_MoreInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("ru", i?.count, {});return /** @type {LocalizedString} */ (`И ещё ${count__number}`)
};

const sv_mod_required_by_more = /** @type {(inputs: Mod_Required_By_MoreInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("sv", i?.count, {});return /** @type {LocalizedString} */ (`Och ${count__number} till`)
};

const tr_mod_required_by_more = /** @type {(inputs: Mod_Required_By_MoreInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("tr", i?.count, {});return /** @type {LocalizedString} */ (`Ve ${count__number} tane daha`)
};

const zh_mod_required_by_more = /** @type {(inputs: Mod_Required_By_MoreInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`还有 ${count__number} 个`)
};

const ja_mod_required_by_more = /** @type {(inputs: Mod_Required_By_MoreInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`ほか ${count__number} 個`)
};

/**
* | output |
* | --- |
* | "And {count__number} more" |
*
* @param {Mod_Required_By_MoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_required_by_more = /** @type {((inputs: Mod_Required_By_MoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Required_By_MoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_required_by_more(inputs)
	if (locale === "de") return de_mod_required_by_more(inputs)
	if (locale === "fr") return fr_mod_required_by_more(inputs)
	if (locale === "it") return it_mod_required_by_more(inputs)
	if (locale === "nl") return nl_mod_required_by_more(inputs)
	if (locale === "pl") return pl_mod_required_by_more(inputs)
	if (locale === "pt") return pt_mod_required_by_more(inputs)
	if (locale === "ru") return ru_mod_required_by_more(inputs)
	if (locale === "sv") return sv_mod_required_by_more(inputs)
	if (locale === "tr") return tr_mod_required_by_more(inputs)
	if (locale === "zh") return zh_mod_required_by_more(inputs)
	if (locale === "ja") return ja_mod_required_by_more(inputs)
	return en_mod_required_by_more(inputs)
});
