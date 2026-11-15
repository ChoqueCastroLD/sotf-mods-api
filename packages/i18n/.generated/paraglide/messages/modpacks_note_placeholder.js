/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Note_PlaceholderInputs */

const en_modpacks_note_placeholder = /** @type {(inputs: Modpacks_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note for players (optional): how to use or set up this mod`)
};

const es_modpacks_note_placeholder = /** @type {(inputs: Modpacks_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota para los jugadores (opcional): cómo usar o configurar este mod`)
};

const de_modpacks_note_placeholder = /** @type {(inputs: Modpacks_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hinweis für Spieler (optional): wie man diesen Mod nutzt oder einrichtet`)
};

const fr_modpacks_note_placeholder = /** @type {(inputs: Modpacks_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note aux joueurs (facultatif) : comment utiliser ou configurer ce mod`)
};

const it_modpacks_note_placeholder = /** @type {(inputs: Modpacks_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota per i giocatori (facoltativa): come usare o configurare questa mod`)
};

const nl_modpacks_note_placeholder = /** @type {(inputs: Modpacks_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opmerking voor spelers (optioneel): hoe je deze mod gebruikt of instelt`)
};

const pl_modpacks_note_placeholder = /** @type {(inputs: Modpacks_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notatka dla graczy (opcjonalna): jak używać lub ustawić ten mod`)
};

const pt_modpacks_note_placeholder = /** @type {(inputs: Modpacks_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota para os jogadores (opcional): como usar ou configurar este mod`)
};

const ru_modpacks_note_placeholder = /** @type {(inputs: Modpacks_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Заметка для игроков (необязательно): как использовать или настроить мод`)
};

const sv_modpacks_note_placeholder = /** @type {(inputs: Modpacks_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anteckning till spelarna (valfritt): hur modden används eller ställs in`)
};

const tr_modpacks_note_placeholder = /** @type {(inputs: Modpacks_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyunculara not (isteğe bağlı): bu modun nasıl kullanılacağı veya ayarlanacağı`)
};

const zh_modpacks_note_placeholder = /** @type {(inputs: Modpacks_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`给玩家的说明（可选）：如何使用或设置这个模组`)
};

const ja_modpacks_note_placeholder = /** @type {(inputs: Modpacks_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プレイヤー向けメモ（任意）：この Mod の使い方や設定方法`)
};

/**
* | output |
* | --- |
* | "Note for players (optional): how to use or set up this mod" |
*
* @param {Modpacks_Note_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_note_placeholder = /** @type {((inputs?: Modpacks_Note_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Note_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_note_placeholder(inputs)
	if (locale === "de") return de_modpacks_note_placeholder(inputs)
	if (locale === "fr") return fr_modpacks_note_placeholder(inputs)
	if (locale === "it") return it_modpacks_note_placeholder(inputs)
	if (locale === "nl") return nl_modpacks_note_placeholder(inputs)
	if (locale === "pl") return pl_modpacks_note_placeholder(inputs)
	if (locale === "pt") return pt_modpacks_note_placeholder(inputs)
	if (locale === "ru") return ru_modpacks_note_placeholder(inputs)
	if (locale === "sv") return sv_modpacks_note_placeholder(inputs)
	if (locale === "tr") return tr_modpacks_note_placeholder(inputs)
	if (locale === "zh") return zh_modpacks_note_placeholder(inputs)
	if (locale === "ja") return ja_modpacks_note_placeholder(inputs)
	return en_modpacks_note_placeholder(inputs)
});
