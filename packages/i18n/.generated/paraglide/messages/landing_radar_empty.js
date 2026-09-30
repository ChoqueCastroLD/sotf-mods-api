/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Radar_EmptyInputs */

const en_landing_radar_empty = /** @type {(inputs: Landing_Radar_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No game patch on the radar yet. Field reports start with the next update.`)
};

const es_landing_radar_empty = /** @type {(inputs: Landing_Radar_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todavía no hay ningún parche en el radar. Los reportes de campo empiezan con la próxima actualización.`)
};

const de_landing_radar_empty = /** @type {(inputs: Landing_Radar_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch kein Spielpatch auf dem Radar. Feldberichte beginnen mit dem nächsten Update.`)
};

const fr_landing_radar_empty = /** @type {(inputs: Landing_Radar_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun patch du jeu sur le radar pour l’instant. Les rapports de terrain commencent avec la prochaine mise à jour.`)
};

const it_landing_radar_empty = /** @type {(inputs: Landing_Radar_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna patch del gioco sul radar per ora. I rapporti sul campo partono con il prossimo aggiornamento.`)
};

const nl_landing_radar_empty = /** @type {(inputs: Landing_Radar_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen gamepatch op de radar. Veldrapporten beginnen bij de volgende update.`)
};

const pl_landing_radar_empty = /** @type {(inputs: Landing_Radar_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na radarze nie ma jeszcze żadnego patcha gry. Raporty terenowe ruszą przy następnej aktualizacji.`)
};

const pt_landing_radar_empty = /** @type {(inputs: Landing_Radar_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum patch do jogo no radar ainda. Os relatórios de campo começam na próxima atualização.`)
};

const ru_landing_radar_empty = /** @type {(inputs: Landing_Radar_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`На радаре пока нет патчей игры. Полевые отчёты начнутся со следующего обновления.`)
};

const sv_landing_radar_empty = /** @type {(inputs: Landing_Radar_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen spelpatch på radarn än. Fältrapporterna börjar med nästa uppdatering.`)
};

const tr_landing_radar_empty = /** @type {(inputs: Landing_Radar_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radarda henüz oyun yaması yok. Saha raporları bir sonraki güncellemeyle başlayacak.`)
};

const zh_landing_radar_empty = /** @type {(inputs: Landing_Radar_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`雷达上还没有游戏补丁。实地报告将从下一次更新开始。`)
};

const ja_landing_radar_empty = /** @type {(inputs: Landing_Radar_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レーダーにはまだゲームパッチがありません。フィールドレポートは次の更新から始まります。`)
};

/**
* | output |
* | --- |
* | "No game patch on the radar yet. Field reports start with the next update." |
*
* @param {Landing_Radar_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_radar_empty = /** @type {((inputs?: Landing_Radar_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Radar_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_radar_empty(inputs)
	if (locale === "de") return de_landing_radar_empty(inputs)
	if (locale === "fr") return fr_landing_radar_empty(inputs)
	if (locale === "it") return it_landing_radar_empty(inputs)
	if (locale === "nl") return nl_landing_radar_empty(inputs)
	if (locale === "pl") return pl_landing_radar_empty(inputs)
	if (locale === "pt") return pt_landing_radar_empty(inputs)
	if (locale === "ru") return ru_landing_radar_empty(inputs)
	if (locale === "sv") return sv_landing_radar_empty(inputs)
	if (locale === "tr") return tr_landing_radar_empty(inputs)
	if (locale === "zh") return zh_landing_radar_empty(inputs)
	if (locale === "ja") return ja_landing_radar_empty(inputs)
	return en_landing_radar_empty(inputs)
});
