/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Picks_Cta_HintInputs */

const en_landing_picks_cta_hint = /** @type {(inputs: Landing_Picks_Cta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter by category, compatibility, game build and more`)
};

const es_landing_picks_cta_hint = /** @type {(inputs: Landing_Picks_Cta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtra por categoría, compatibilidad, versión del juego y más`)
};

const de_landing_picks_cta_hint = /** @type {(inputs: Landing_Picks_Cta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtere nach Kategorie, Kompatibilität, Spielversion und mehr`)
};

const fr_landing_picks_cta_hint = /** @type {(inputs: Landing_Picks_Cta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrez par catégorie, compatibilité, version du jeu et plus encore`)
};

const it_landing_picks_cta_hint = /** @type {(inputs: Landing_Picks_Cta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtra per categoria, compatibilità, versione del gioco e altro`)
};

const nl_landing_picks_cta_hint = /** @type {(inputs: Landing_Picks_Cta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter op categorie, compatibiliteit, gameversie en meer`)
};

const pl_landing_picks_cta_hint = /** @type {(inputs: Landing_Picks_Cta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtruj według kategorii, zgodności, wersji gry i nie tylko`)
};

const pt_landing_picks_cta_hint = /** @type {(inputs: Landing_Picks_Cta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtre por categoria, compatibilidade, versão do jogo e mais`)
};

const ru_landing_picks_cta_hint = /** @type {(inputs: Landing_Picks_Cta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Фильтры по категории, совместимости, версии игры и другие`)
};

const sv_landing_picks_cta_hint = /** @type {(inputs: Landing_Picks_Cta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrera på kategori, kompatibilitet, spelversion och mer`)
};

const tr_landing_picks_cta_hint = /** @type {(inputs: Landing_Picks_Cta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategori, uyumluluk, oyun sürümü ve daha fazlasına göre filtrele`)
};

const zh_landing_picks_cta_hint = /** @type {(inputs: Landing_Picks_Cta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按分类、兼容性、游戏版本等筛选`)
};

const ja_landing_picks_cta_hint = /** @type {(inputs: Landing_Picks_Cta_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリ、互換性、ゲームバージョンなどで絞り込み`)
};

/**
* | output |
* | --- |
* | "Filter by category, compatibility, game build and more" |
*
* @param {Landing_Picks_Cta_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_picks_cta_hint = /** @type {((inputs?: Landing_Picks_Cta_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Picks_Cta_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_picks_cta_hint(inputs)
	if (locale === "de") return de_landing_picks_cta_hint(inputs)
	if (locale === "fr") return fr_landing_picks_cta_hint(inputs)
	if (locale === "it") return it_landing_picks_cta_hint(inputs)
	if (locale === "nl") return nl_landing_picks_cta_hint(inputs)
	if (locale === "pl") return pl_landing_picks_cta_hint(inputs)
	if (locale === "pt") return pt_landing_picks_cta_hint(inputs)
	if (locale === "ru") return ru_landing_picks_cta_hint(inputs)
	if (locale === "sv") return sv_landing_picks_cta_hint(inputs)
	if (locale === "tr") return tr_landing_picks_cta_hint(inputs)
	if (locale === "zh") return zh_landing_picks_cta_hint(inputs)
	if (locale === "ja") return ja_landing_picks_cta_hint(inputs)
	return en_landing_picks_cta_hint(inputs)
});
