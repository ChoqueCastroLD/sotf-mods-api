/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_Source_HintInputs */

const en_basecamp_listing_source_hint = /** @type {(inputs: Basecamp_Listing_Source_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub or any public repository. Players trust mods with open source more.`)
};

const es_basecamp_listing_source_hint = /** @type {(inputs: Basecamp_Listing_Source_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub o cualquier repositorio público. Los jugadores confían más en los mods de código abierto.`)
};

const de_basecamp_listing_source_hint = /** @type {(inputs: Basecamp_Listing_Source_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub oder ein anderes öffentliches Repository. Spieler vertrauen Open-Source-Mods mehr.`)
};

const fr_basecamp_listing_source_hint = /** @type {(inputs: Basecamp_Listing_Source_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub ou tout dépôt public. Les joueurs font davantage confiance aux mods open source.`)
};

const it_basecamp_listing_source_hint = /** @type {(inputs: Basecamp_Listing_Source_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub o un altro repository pubblico. I giocatori si fidano di più delle mod open source.`)
};

const nl_basecamp_listing_source_hint = /** @type {(inputs: Basecamp_Listing_Source_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub of een andere openbare repository. Spelers vertrouwen opensourcemods meer.`)
};

const pl_basecamp_listing_source_hint = /** @type {(inputs: Basecamp_Listing_Source_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub lub inne publiczne repozytorium. Gracze bardziej ufają modom z otwartym kodem.`)
};

const pt_basecamp_listing_source_hint = /** @type {(inputs: Basecamp_Listing_Source_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub ou qualquer repositório público. Os jogadores confiam mais em mods de código aberto.`)
};

const ru_basecamp_listing_source_hint = /** @type {(inputs: Basecamp_Listing_Source_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub или любой публичный репозиторий. Игроки больше доверяют модам с открытым кодом.`)
};

const sv_basecamp_listing_source_hint = /** @type {(inputs: Basecamp_Listing_Source_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub eller något annat offentligt repo. Spelare litar mer på moddar med öppen källkod.`)
};

const tr_basecamp_listing_source_hint = /** @type {(inputs: Basecamp_Listing_Source_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub ya da herhangi bir açık depo. Oyuncular açık kaynaklı modlara daha çok güvenir.`)
};

const zh_basecamp_listing_source_hint = /** @type {(inputs: Basecamp_Listing_Source_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub 或任何公开仓库。玩家更信任开源模组。`)
};

const ja_basecamp_listing_source_hint = /** @type {(inputs: Basecamp_Listing_Source_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub などの公開リポジトリ。オープンソースの MOD はより信頼されます。`)
};

/**
* | output |
* | --- |
* | "GitHub or any public repository. Players trust mods with open source more." |
*
* @param {Basecamp_Listing_Source_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_source_hint = /** @type {((inputs?: Basecamp_Listing_Source_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_Source_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_source_hint(inputs)
	if (locale === "de") return de_basecamp_listing_source_hint(inputs)
	if (locale === "fr") return fr_basecamp_listing_source_hint(inputs)
	if (locale === "it") return it_basecamp_listing_source_hint(inputs)
	if (locale === "nl") return nl_basecamp_listing_source_hint(inputs)
	if (locale === "pl") return pl_basecamp_listing_source_hint(inputs)
	if (locale === "pt") return pt_basecamp_listing_source_hint(inputs)
	if (locale === "ru") return ru_basecamp_listing_source_hint(inputs)
	if (locale === "sv") return sv_basecamp_listing_source_hint(inputs)
	if (locale === "tr") return tr_basecamp_listing_source_hint(inputs)
	if (locale === "zh") return zh_basecamp_listing_source_hint(inputs)
	if (locale === "ja") return ja_basecamp_listing_source_hint(inputs)
	return en_basecamp_listing_source_hint(inputs)
});
