/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Start_Play_TextInputs */

const en_landing_start_play_text = /** @type {(inputs: Landing_Start_Play_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start the game and press F1 to check your mods loaded. After a game patch, check Patch Radar.`)
};

const es_landing_start_play_text = /** @type {(inputs: Landing_Start_Play_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inicia el juego y pulsa F1 para comprobar que tus mods cargaron. Tras un parche, mira el Radar de parches.`)
};

const de_landing_start_play_text = /** @type {(inputs: Landing_Start_Play_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Starte das Spiel und drücke F1, um zu prüfen, ob deine Mods geladen sind. Nach einem Patch: Patch-Radar checken.`)
};

const fr_landing_start_play_text = /** @type {(inputs: Landing_Start_Play_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lancez le jeu et appuyez sur F1 pour vérifier que vos mods sont chargés. Après un patch, consultez le Radar des patchs.`)
};

const it_landing_start_play_text = /** @type {(inputs: Landing_Start_Play_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avvia il gioco e premi F1 per controllare che le mod siano caricate. Dopo una patch, controlla il Radar delle patch.`)
};

const nl_landing_start_play_text = /** @type {(inputs: Landing_Start_Play_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start de game en druk op F1 om te controleren of je mods geladen zijn. Check na een patch de Patchradar.`)
};

const pl_landing_start_play_text = /** @type {(inputs: Landing_Start_Play_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uruchom grę i naciśnij F1, aby sprawdzić, czy mody się wczytały. Po patchu zajrzyj do radaru patchy.`)
};

const pt_landing_start_play_text = /** @type {(inputs: Landing_Start_Play_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inicie o jogo e aperte F1 para conferir se os mods carregaram. Depois de um patch, confira o Radar de patches.`)
};

const ru_landing_start_play_text = /** @type {(inputs: Landing_Start_Play_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запустите игру и нажмите F1, чтобы убедиться, что моды загрузились. После патча загляните в радар патчей.`)
};

const sv_landing_start_play_text = /** @type {(inputs: Landing_Start_Play_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Starta spelet och tryck på F1 för att se att dina moddar laddats. Kolla Patchradarn efter en spelpatch.`)
};

const tr_landing_start_play_text = /** @type {(inputs: Landing_Start_Play_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyunu başlat ve modların yüklendiğini görmek için F1’e bas. Bir yamadan sonra Yama Radarı’na bak.`)
};

const zh_landing_start_play_text = /** @type {(inputs: Landing_Start_Play_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`启动游戏并按 F1 确认模组已加载。游戏更新后，请查看补丁雷达。`)
};

const ja_landing_start_play_text = /** @type {(inputs: Landing_Start_Play_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲームを起動し、F1 を押してMODが読み込まれたか確認します。パッチの後はパッチレーダーをチェック。`)
};

/**
* | output |
* | --- |
* | "Start the game and press F1 to check your mods loaded. After a game patch, check Patch Radar." |
*
* @param {Landing_Start_Play_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_start_play_text = /** @type {((inputs?: Landing_Start_Play_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Start_Play_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_start_play_text(inputs)
	if (locale === "de") return de_landing_start_play_text(inputs)
	if (locale === "fr") return fr_landing_start_play_text(inputs)
	if (locale === "it") return it_landing_start_play_text(inputs)
	if (locale === "nl") return nl_landing_start_play_text(inputs)
	if (locale === "pl") return pl_landing_start_play_text(inputs)
	if (locale === "pt") return pt_landing_start_play_text(inputs)
	if (locale === "ru") return ru_landing_start_play_text(inputs)
	if (locale === "sv") return sv_landing_start_play_text(inputs)
	if (locale === "tr") return tr_landing_start_play_text(inputs)
	if (locale === "zh") return zh_landing_start_play_text(inputs)
	if (locale === "ja") return ja_landing_start_play_text(inputs)
	return en_landing_start_play_text(inputs)
});
