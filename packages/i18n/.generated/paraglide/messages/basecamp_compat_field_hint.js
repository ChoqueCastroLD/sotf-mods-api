/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_Field_HintInputs */

const en_basecamp_compat_field_hint = /** @type {(inputs: Basecamp_Compat_Field_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What players report for each version and game build.`)
};

const es_basecamp_compat_field_hint = /** @type {(inputs: Basecamp_Compat_Field_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lo que informan los jugadores para cada versión y build del juego.`)
};

const de_basecamp_compat_field_hint = /** @type {(inputs: Basecamp_Compat_Field_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was Spieler zu jeder Version und jedem Spiel-Build melden.`)
};

const fr_basecamp_compat_field_hint = /** @type {(inputs: Basecamp_Compat_Field_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce que signalent les joueurs pour chaque version et build du jeu.`)
};

const it_basecamp_compat_field_hint = /** @type {(inputs: Basecamp_Compat_Field_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cosa segnalano i giocatori per ogni versione e build del gioco.`)
};

const nl_basecamp_compat_field_hint = /** @type {(inputs: Basecamp_Compat_Field_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wat spelers melden voor elke versie en gamebuild.`)
};

const pl_basecamp_compat_field_hint = /** @type {(inputs: Basecamp_Compat_Field_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co gracze zgłaszają dla każdej wersji i buildu gry.`)
};

const pt_basecamp_compat_field_hint = /** @type {(inputs: Basecamp_Compat_Field_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O que os jogadores relatam para cada versão e build do jogo.`)
};

const ru_basecamp_compat_field_hint = /** @type {(inputs: Basecamp_Compat_Field_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что игроки сообщают по каждой версии и билду игры.`)
};

const sv_basecamp_compat_field_hint = /** @type {(inputs: Basecamp_Compat_Field_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vad spelare rapporterar för varje version och spelbuild.`)
};

const tr_basecamp_compat_field_hint = /** @type {(inputs: Basecamp_Compat_Field_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyuncuların her sürüm ve oyun sürümü için bildirdikleri.`)
};

const zh_basecamp_compat_field_hint = /** @type {(inputs: Basecamp_Compat_Field_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`玩家针对每个版本和游戏版本的反馈。`)
};

const ja_basecamp_compat_field_hint = /** @type {(inputs: Basecamp_Compat_Field_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`各バージョンとゲームビルドについてのプレイヤーの報告。`)
};

/**
* | output |
* | --- |
* | "What players report for each version and game build." |
*
* @param {Basecamp_Compat_Field_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_field_hint = /** @type {((inputs?: Basecamp_Compat_Field_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_Field_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_field_hint(inputs)
	if (locale === "de") return de_basecamp_compat_field_hint(inputs)
	if (locale === "fr") return fr_basecamp_compat_field_hint(inputs)
	if (locale === "it") return it_basecamp_compat_field_hint(inputs)
	if (locale === "nl") return nl_basecamp_compat_field_hint(inputs)
	if (locale === "pl") return pl_basecamp_compat_field_hint(inputs)
	if (locale === "pt") return pt_basecamp_compat_field_hint(inputs)
	if (locale === "ru") return ru_basecamp_compat_field_hint(inputs)
	if (locale === "sv") return sv_basecamp_compat_field_hint(inputs)
	if (locale === "tr") return tr_basecamp_compat_field_hint(inputs)
	if (locale === "zh") return zh_basecamp_compat_field_hint(inputs)
	if (locale === "ja") return ja_basecamp_compat_field_hint(inputs)
	return en_basecamp_compat_field_hint(inputs)
});
