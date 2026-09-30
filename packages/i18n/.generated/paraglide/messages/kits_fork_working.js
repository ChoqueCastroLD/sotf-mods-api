/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Fork_WorkingInputs */

const en_kits_fork_working = /** @type {(inputs: Kits_Fork_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Forking the kit…`)
};

const es_kits_fork_working = /** @type {(inputs: Kits_Fork_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiando el kit…`)
};

const de_kits_fork_working = /** @type {(inputs: Kits_Fork_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit wird geforkt …`)
};

const fr_kits_fork_working = /** @type {(inputs: Kits_Fork_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duplication du kit…`)
};

const it_kits_fork_working = /** @type {(inputs: Kits_Fork_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fork del kit in corso…`)
};

const nl_kits_fork_working = /** @type {(inputs: Kits_Fork_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit wordt geforkt…`)
};

const pl_kits_fork_working = /** @type {(inputs: Kits_Fork_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiowanie zestawu…`)
};

const pt_kits_fork_working = /** @type {(inputs: Kits_Fork_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiando o kit…`)
};

const ru_kits_fork_working = /** @type {(inputs: Kits_Fork_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Копируем набор…`)
};

const sv_kits_fork_working = /** @type {(inputs: Kits_Fork_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Forkar kitet …`)
};

const tr_kits_fork_working = /** @type {(inputs: Kits_Fork_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit kopyalanıyor…`)
};

const zh_kits_fork_working = /** @type {(inputs: Kits_Fork_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在复刻套装…`)
};

const ja_kits_fork_working = /** @type {(inputs: Kits_Fork_WorkingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットをフォーク中…`)
};

/**
* | output |
* | --- |
* | "Forking the kit…" |
*
* @param {Kits_Fork_WorkingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_fork_working = /** @type {((inputs?: Kits_Fork_WorkingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Fork_WorkingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_fork_working(inputs)
	if (locale === "de") return de_kits_fork_working(inputs)
	if (locale === "fr") return fr_kits_fork_working(inputs)
	if (locale === "it") return it_kits_fork_working(inputs)
	if (locale === "nl") return nl_kits_fork_working(inputs)
	if (locale === "pl") return pl_kits_fork_working(inputs)
	if (locale === "pt") return pt_kits_fork_working(inputs)
	if (locale === "ru") return ru_kits_fork_working(inputs)
	if (locale === "sv") return sv_kits_fork_working(inputs)
	if (locale === "tr") return tr_kits_fork_working(inputs)
	if (locale === "zh") return zh_kits_fork_working(inputs)
	if (locale === "ja") return ja_kits_fork_working(inputs)
	return en_kits_fork_working(inputs)
});
