/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Empty_TextInputs */

const en_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sync from Steam, or register the game version players are on today.`)
};

const es_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sincroniza con Steam o registra la versión del juego que usan hoy los jugadores.`)
};

const de_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mit Steam abgleichen oder die Spielversion registrieren, die die Spieler heute nutzen.`)
};

const fr_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Synchronisez avec Steam ou enregistrez la version du jeu que les joueurs utilisent aujourd’hui.`)
};

const it_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sincronizza con Steam o registra la versione del gioco che i giocatori usano oggi.`)
};

const nl_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Synchroniseer met Steam of registreer de spelversie die spelers vandaag gebruiken.`)
};

const pl_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zsynchronizuj ze Steamem albo zarejestruj wersję gry, na której gracze grają dziś.`)
};

const pt_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sincronize com a Steam ou registre a versão do jogo que os jogadores usam hoje.`)
};

const ru_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Синхронизируйте со Steam или добавьте версию игры, на которой сейчас играют.`)
};

const sv_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Synka med Steam eller registrera den spelversion som spelarna kör i dag.`)
};

const tr_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam ile eşitle ya da oyuncuların bugün kullandığı oyun sürümünü kaydet.`)
};

const zh_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`从 Steam 同步，或登记玩家今天所用的游戏版本。`)
};

const ja_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam と同期するか、プレイヤーが今遊んでいるゲームバージョンを登録してください。`)
};

/**
* | output |
* | --- |
* | "Sync from Steam, or register the game version players are on today." |
*
* @param {Admin_Builds_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_empty_text = /** @type {((inputs?: Admin_Builds_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_empty_text(inputs)
	if (locale === "de") return de_admin_builds_empty_text(inputs)
	if (locale === "fr") return fr_admin_builds_empty_text(inputs)
	if (locale === "it") return it_admin_builds_empty_text(inputs)
	if (locale === "nl") return nl_admin_builds_empty_text(inputs)
	if (locale === "pl") return pl_admin_builds_empty_text(inputs)
	if (locale === "pt") return pt_admin_builds_empty_text(inputs)
	if (locale === "ru") return ru_admin_builds_empty_text(inputs)
	if (locale === "sv") return sv_admin_builds_empty_text(inputs)
	if (locale === "tr") return tr_admin_builds_empty_text(inputs)
	if (locale === "zh") return zh_admin_builds_empty_text(inputs)
	if (locale === "ja") return ja_admin_builds_empty_text(inputs)
	return en_admin_builds_empty_text(inputs)
});
