/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_Empty_TextInputs */

const en_basecamp_analytics_empty_text = /** @type {(inputs: Basecamp_Analytics_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish a mod and its numbers show up here.`)
};

const es_basecamp_analytics_empty_text = /** @type {(inputs: Basecamp_Analytics_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publica un mod y sus cifras aparecerán aquí.`)
};

const de_basecamp_analytics_empty_text = /** @type {(inputs: Basecamp_Analytics_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veröffentliche einen Mod und seine Zahlen erscheinen hier.`)
};

const fr_basecamp_analytics_empty_text = /** @type {(inputs: Basecamp_Analytics_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publiez un mod et ses chiffres apparaîtront ici.`)
};

const it_basecamp_analytics_empty_text = /** @type {(inputs: Basecamp_Analytics_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblica una mod e i suoi numeri compariranno qui.`)
};

const nl_basecamp_analytics_empty_text = /** @type {(inputs: Basecamp_Analytics_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publiceer een mod en de cijfers verschijnen hier.`)
};

const pl_basecamp_analytics_empty_text = /** @type {(inputs: Basecamp_Analytics_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opublikuj mod, a jego liczby pojawią się tutaj.`)
};

const pt_basecamp_analytics_empty_text = /** @type {(inputs: Basecamp_Analytics_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publique um mod e os números dele aparecerão aqui.`)
};

const ru_basecamp_analytics_empty_text = /** @type {(inputs: Basecamp_Analytics_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опубликуйте мод, и его цифры появятся здесь.`)
};

const sv_basecamp_analytics_empty_text = /** @type {(inputs: Basecamp_Analytics_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicera en mod så visas dess siffror här.`)
};

const tr_basecamp_analytics_empty_text = /** @type {(inputs: Basecamp_Analytics_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir mod yayınla, rakamları burada görünsün.`)
};

const zh_basecamp_analytics_empty_text = /** @type {(inputs: Basecamp_Analytics_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布模组后，它的数据会显示在这里。`)
};

const ja_basecamp_analytics_empty_text = /** @type {(inputs: Basecamp_Analytics_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD を公開すると、その数値がここに表示されます。`)
};

/**
* | output |
* | --- |
* | "Publish a mod and its numbers show up here." |
*
* @param {Basecamp_Analytics_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_empty_text = /** @type {((inputs?: Basecamp_Analytics_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_empty_text(inputs)
	if (locale === "de") return de_basecamp_analytics_empty_text(inputs)
	if (locale === "fr") return fr_basecamp_analytics_empty_text(inputs)
	if (locale === "it") return it_basecamp_analytics_empty_text(inputs)
	if (locale === "nl") return nl_basecamp_analytics_empty_text(inputs)
	if (locale === "pl") return pl_basecamp_analytics_empty_text(inputs)
	if (locale === "pt") return pt_basecamp_analytics_empty_text(inputs)
	if (locale === "ru") return ru_basecamp_analytics_empty_text(inputs)
	if (locale === "sv") return sv_basecamp_analytics_empty_text(inputs)
	if (locale === "tr") return tr_basecamp_analytics_empty_text(inputs)
	if (locale === "zh") return zh_basecamp_analytics_empty_text(inputs)
	if (locale === "ja") return ja_basecamp_analytics_empty_text(inputs)
	return en_basecamp_analytics_empty_text(inputs)
});
