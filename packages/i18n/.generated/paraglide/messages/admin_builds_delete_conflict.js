/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Delete_ConflictInputs */

const en_admin_builds_delete_conflict = /** @type {(inputs: Admin_Builds_Delete_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Players already reported on this build. Keep it, or mark another one as current.`)
};

const es_admin_builds_delete_conflict = /** @type {(inputs: Admin_Builds_Delete_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ya hay reportes de jugadores sobre esta build. Consérvala o marca otra como actual.`)
};

const de_admin_builds_delete_conflict = /** @type {(inputs: Admin_Builds_Delete_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spieler haben zu diesem Build schon berichtet. Behalte ihn oder markiere einen anderen als aktuell.`)
};

const fr_admin_builds_delete_conflict = /** @type {(inputs: Admin_Builds_Delete_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Des joueurs ont déjà fait des rapports sur ce build. Gardez-le ou marquez-en un autre comme actuel.`)
};

const it_admin_builds_delete_conflict = /** @type {(inputs: Admin_Builds_Delete_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ci sono già report dei giocatori su questa build. Tienila oppure segnane un’altra come attuale.`)
};

const nl_admin_builds_delete_conflict = /** @type {(inputs: Admin_Builds_Delete_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelers hebben al over deze build gerapporteerd. Houd hem, of markeer een andere als huidig.`)
};

const pl_admin_builds_delete_conflict = /** @type {(inputs: Admin_Builds_Delete_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gracze już zgłaszali raporty dla tego buildu. Zachowaj go albo oznacz inny jako aktualny.`)
};

const pt_admin_builds_delete_conflict = /** @type {(inputs: Admin_Builds_Delete_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jogadores já fizeram relatos sobre este build. Mantenha-o ou marque outro como atual.`)
};

const ru_admin_builds_delete_conflict = /** @type {(inputs: Admin_Builds_Delete_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`По этой сборке уже есть отчёты игроков. Оставьте её или отметьте текущей другую.`)
};

const sv_admin_builds_delete_conflict = /** @type {(inputs: Admin_Builds_Delete_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelare har redan rapporterat om det här bygget. Behåll det eller markera ett annat som aktuellt.`)
};

const tr_admin_builds_delete_conflict = /** @type {(inputs: Admin_Builds_Delete_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyuncular bu sürüm hakkında zaten rapor verdi. Sürümü tut ya da başka birini güncel olarak işaretle.`)
};

const zh_admin_builds_delete_conflict = /** @type {(inputs: Admin_Builds_Delete_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已有玩家报告了这个版本。请保留它，或把另一个版本标记为当前。`)
};

const ja_admin_builds_delete_conflict = /** @type {(inputs: Admin_Builds_Delete_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このビルドにはすでにプレイヤーのレポートがあります。残しておくか、別のビルドを現在のビルドにしてください。`)
};

/**
* | output |
* | --- |
* | "Players already reported on this build. Keep it, or mark another one as current." |
*
* @param {Admin_Builds_Delete_ConflictInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_delete_conflict = /** @type {((inputs?: Admin_Builds_Delete_ConflictInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Delete_ConflictInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_delete_conflict(inputs)
	if (locale === "de") return de_admin_builds_delete_conflict(inputs)
	if (locale === "fr") return fr_admin_builds_delete_conflict(inputs)
	if (locale === "it") return it_admin_builds_delete_conflict(inputs)
	if (locale === "nl") return nl_admin_builds_delete_conflict(inputs)
	if (locale === "pl") return pl_admin_builds_delete_conflict(inputs)
	if (locale === "pt") return pt_admin_builds_delete_conflict(inputs)
	if (locale === "ru") return ru_admin_builds_delete_conflict(inputs)
	if (locale === "sv") return sv_admin_builds_delete_conflict(inputs)
	if (locale === "tr") return tr_admin_builds_delete_conflict(inputs)
	if (locale === "zh") return zh_admin_builds_delete_conflict(inputs)
	if (locale === "ja") return ja_admin_builds_delete_conflict(inputs)
	return en_admin_builds_delete_conflict(inputs)
});
