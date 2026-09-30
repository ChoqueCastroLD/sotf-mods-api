/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Translations_RevertInputs */

const en_translations_revert = /** @type {(inputs: Translations_RevertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use automatic translation`)
};

const es_translations_revert = /** @type {(inputs: Translations_RevertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usar la traducción automática`)
};

const de_translations_revert = /** @type {(inputs: Translations_RevertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatische Übersetzung verwenden`)
};

const fr_translations_revert = /** @type {(inputs: Translations_RevertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utiliser la traduction automatique`)
};

const it_translations_revert = /** @type {(inputs: Translations_RevertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa la traduzione automatica`)
};

const nl_translations_revert = /** @type {(inputs: Translations_RevertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Automatische vertaling gebruiken`)
};

const pl_translations_revert = /** @type {(inputs: Translations_RevertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użyj tłumaczenia automatycznego`)
};

const pt_translations_revert = /** @type {(inputs: Translations_RevertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usar a tradução automática`)
};

const ru_translations_revert = /** @type {(inputs: Translations_RevertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Использовать автоматический перевод`)
};

const sv_translations_revert = /** @type {(inputs: Translations_RevertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd automatisk översättning`)
};

const tr_translations_revert = /** @type {(inputs: Translations_RevertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otomatik çeviriyi kullan`)
};

const zh_translations_revert = /** @type {(inputs: Translations_RevertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使用自动翻译`)
};

const ja_translations_revert = /** @type {(inputs: Translations_RevertInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自動翻訳を使う`)
};

/**
* | output |
* | --- |
* | "Use automatic translation" |
*
* @param {Translations_RevertInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_revert = /** @type {((inputs?: Translations_RevertInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_RevertInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_revert(inputs)
	if (locale === "de") return de_translations_revert(inputs)
	if (locale === "fr") return fr_translations_revert(inputs)
	if (locale === "it") return it_translations_revert(inputs)
	if (locale === "nl") return nl_translations_revert(inputs)
	if (locale === "pl") return pl_translations_revert(inputs)
	if (locale === "pt") return pt_translations_revert(inputs)
	if (locale === "ru") return ru_translations_revert(inputs)
	if (locale === "sv") return sv_translations_revert(inputs)
	if (locale === "tr") return tr_translations_revert(inputs)
	if (locale === "zh") return zh_translations_revert(inputs)
	if (locale === "ja") return ja_translations_revert(inputs)
	return en_translations_revert(inputs)
});
