/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown>, version: NonNullable<unknown> }} Signals_Version_PublishedInputs */

const en_signals_version_published = /** @type {(inputs: Signals_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ${i?.version} is out — you follow it`)
};

const es_signals_version_published = /** @type {(inputs: Signals_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ya está aquí ${i?.mod} ${i?.version}: lo sigues`)
};

const de_signals_version_published = /** @type {(inputs: Signals_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ${i?.version} ist da – du folgst dem Mod`)
};

const fr_signals_version_published = /** @type {(inputs: Signals_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ${i?.version} est sorti — vous le suivez`)
};

const it_signals_version_published = /** @type {(inputs: Signals_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`È uscita ${i?.mod} ${i?.version}: la segui`)
};

const nl_signals_version_published = /** @type {(inputs: Signals_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ${i?.version} is uit — je volgt deze mod`)
};

const pl_signals_version_published = /** @type {(inputs: Signals_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wyszedł ${i?.mod} ${i?.version} — obserwujesz go`)
};

const pt_signals_version_published = /** @type {(inputs: Signals_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Saiu ${i?.mod} ${i?.version} — você segue este mod`)
};

const ru_signals_version_published = /** @type {(inputs: Signals_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Вышел ${i?.mod} ${i?.version} — вы на него подписаны`)
};

const sv_signals_version_published = /** @type {(inputs: Signals_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ${i?.version} är ute — du följer den`)
};

const tr_signals_version_published = /** @type {(inputs: Signals_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ${i?.version} çıktı — bu modu takip ediyorsun`)
};

const zh_signals_version_published = /** @type {(inputs: Signals_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ${i?.version} 已发布——你关注了它`)
};

const ja_signals_version_published = /** @type {(inputs: Signals_Version_PublishedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ${i?.version} が公開されました（フォロー中）`)
};

/**
* | output |
* | --- |
* | "{mod} {version} is out — you follow it" |
*
* @param {Signals_Version_PublishedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_version_published = /** @type {((inputs: Signals_Version_PublishedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Version_PublishedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_version_published(inputs)
	if (locale === "de") return de_signals_version_published(inputs)
	if (locale === "fr") return fr_signals_version_published(inputs)
	if (locale === "it") return it_signals_version_published(inputs)
	if (locale === "nl") return nl_signals_version_published(inputs)
	if (locale === "pl") return pl_signals_version_published(inputs)
	if (locale === "pt") return pt_signals_version_published(inputs)
	if (locale === "ru") return ru_signals_version_published(inputs)
	if (locale === "sv") return sv_signals_version_published(inputs)
	if (locale === "tr") return tr_signals_version_published(inputs)
	if (locale === "zh") return zh_signals_version_published(inputs)
	if (locale === "ja") return ja_signals_version_published(inputs)
	return en_signals_version_published(inputs)
});
