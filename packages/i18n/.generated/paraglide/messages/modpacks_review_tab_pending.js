/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Modpacks_Review_Tab_PendingInputs */

const en_modpacks_review_tab_pending = /** @type {(inputs: Modpacks_Review_Tab_PendingInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("en", i?.count, {});return /** @type {LocalizedString} */ (`Pending (${count__number})`)
};

const es_modpacks_review_tab_pending = /** @type {(inputs: Modpacks_Review_Tab_PendingInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("es", i?.count, {});return /** @type {LocalizedString} */ (`Pendientes (${count__number})`)
};

const de_modpacks_review_tab_pending = /** @type {(inputs: Modpacks_Review_Tab_PendingInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("de", i?.count, {});return /** @type {LocalizedString} */ (`Ausstehend (${count__number})`)
};

const fr_modpacks_review_tab_pending = /** @type {(inputs: Modpacks_Review_Tab_PendingInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("fr", i?.count, {});return /** @type {LocalizedString} */ (`En attente (${count__number})`)
};

const it_modpacks_review_tab_pending = /** @type {(inputs: Modpacks_Review_Tab_PendingInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("it", i?.count, {});return /** @type {LocalizedString} */ (`In attesa (${count__number})`)
};

const nl_modpacks_review_tab_pending = /** @type {(inputs: Modpacks_Review_Tab_PendingInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("nl", i?.count, {});return /** @type {LocalizedString} */ (`In afwachting (${count__number})`)
};

const pl_modpacks_review_tab_pending = /** @type {(inputs: Modpacks_Review_Tab_PendingInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("pl", i?.count, {});return /** @type {LocalizedString} */ (`Oczekujące (${count__number})`)
};

const pt_modpacks_review_tab_pending = /** @type {(inputs: Modpacks_Review_Tab_PendingInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("pt", i?.count, {});return /** @type {LocalizedString} */ (`Pendentes (${count__number})`)
};

const ru_modpacks_review_tab_pending = /** @type {(inputs: Modpacks_Review_Tab_PendingInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("ru", i?.count, {});return /** @type {LocalizedString} */ (`Ожидают (${count__number})`)
};

const sv_modpacks_review_tab_pending = /** @type {(inputs: Modpacks_Review_Tab_PendingInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("sv", i?.count, {});return /** @type {LocalizedString} */ (`Väntande (${count__number})`)
};

const tr_modpacks_review_tab_pending = /** @type {(inputs: Modpacks_Review_Tab_PendingInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("tr", i?.count, {});return /** @type {LocalizedString} */ (`Bekleyen (${count__number})`)
};

const zh_modpacks_review_tab_pending = /** @type {(inputs: Modpacks_Review_Tab_PendingInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`待审核（${count__number}）`)
};

const ja_modpacks_review_tab_pending = /** @type {(inputs: Modpacks_Review_Tab_PendingInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`承認待ち（${count__number}）`)
};

/**
* | output |
* | --- |
* | "Pending ({count__number})" |
*
* @param {Modpacks_Review_Tab_PendingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_review_tab_pending = /** @type {((inputs: Modpacks_Review_Tab_PendingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Review_Tab_PendingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_review_tab_pending(inputs)
	if (locale === "de") return de_modpacks_review_tab_pending(inputs)
	if (locale === "fr") return fr_modpacks_review_tab_pending(inputs)
	if (locale === "it") return it_modpacks_review_tab_pending(inputs)
	if (locale === "nl") return nl_modpacks_review_tab_pending(inputs)
	if (locale === "pl") return pl_modpacks_review_tab_pending(inputs)
	if (locale === "pt") return pt_modpacks_review_tab_pending(inputs)
	if (locale === "ru") return ru_modpacks_review_tab_pending(inputs)
	if (locale === "sv") return sv_modpacks_review_tab_pending(inputs)
	if (locale === "tr") return tr_modpacks_review_tab_pending(inputs)
	if (locale === "zh") return zh_modpacks_review_tab_pending(inputs)
	if (locale === "ja") return ja_modpacks_review_tab_pending(inputs)
	return en_modpacks_review_tab_pending(inputs)
});
