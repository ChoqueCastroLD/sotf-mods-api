/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Translations_RevertedInputs */

const en_translations_reverted = /** @type {(inputs: Translations_RevertedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatic translation requested`)
};

const es_translations_reverted = /** @type {(inputs: Translations_RevertedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traducción automática solicitada`)
};

const de_translations_reverted = /** @type {(inputs: Translations_RevertedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatische Übersetzung angefordert`)
};

const fr_translations_reverted = /** @type {(inputs: Translations_RevertedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traduction automatique demandée`)
};

const it_translations_reverted = /** @type {(inputs: Translations_RevertedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traduzione automatica richiesta`)
};

const nl_translations_reverted = /** @type {(inputs: Translations_RevertedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatische vertaling aangevraagd`)
};

const pl_translations_reverted = /** @type {(inputs: Translations_RevertedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zamówiono tłumaczenie automatyczne`)
};

const pt_translations_reverted = /** @type {(inputs: Translations_RevertedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tradução automática solicitada`)
};

const ru_translations_reverted = /** @type {(inputs: Translations_RevertedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автоматический перевод запрошен`)
};

const sv_translations_reverted = /** @type {(inputs: Translations_RevertedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatisk översättning begärd`)
};

const tr_translations_reverted = /** @type {(inputs: Translations_RevertedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otomatik çeviri istendi`)
};

const zh_translations_reverted = /** @type {(inputs: Translations_RevertedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已请求自动翻译`)
};

const ja_translations_reverted = /** @type {(inputs: Translations_RevertedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自動翻訳をリクエストしました`)
};

/**
* | output |
* | --- |
* | "Automatic translation requested" |
*
* @param {Translations_RevertedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_reverted = /** @type {((inputs?: Translations_RevertedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_RevertedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_reverted(inputs)
	if (locale === "de") return de_translations_reverted(inputs)
	if (locale === "fr") return fr_translations_reverted(inputs)
	if (locale === "it") return it_translations_reverted(inputs)
	if (locale === "nl") return nl_translations_reverted(inputs)
	if (locale === "pl") return pl_translations_reverted(inputs)
	if (locale === "pt") return pt_translations_reverted(inputs)
	if (locale === "ru") return ru_translations_reverted(inputs)
	if (locale === "sv") return sv_translations_reverted(inputs)
	if (locale === "tr") return tr_translations_reverted(inputs)
	if (locale === "zh") return zh_translations_reverted(inputs)
	if (locale === "ja") return ja_translations_reverted(inputs)
	return en_translations_reverted(inputs)
});
