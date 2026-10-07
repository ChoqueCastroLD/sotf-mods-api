/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Sync_Failing_TitleInputs */

const en_admin_builds_sync_failing_title = /** @type {(inputs: Admin_Builds_Sync_Failing_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The last Steam check failed`)
};

const es_admin_builds_sync_failing_title = /** @type {(inputs: Admin_Builds_Sync_Failing_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falló la última consulta a Steam`)
};

const de_admin_builds_sync_failing_title = /** @type {(inputs: Admin_Builds_Sync_Failing_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die letzte Steam-Prüfung ist fehlgeschlagen`)
};

const fr_admin_builds_sync_failing_title = /** @type {(inputs: Admin_Builds_Sync_Failing_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La dernière vérification de Steam a échoué`)
};

const it_admin_builds_sync_failing_title = /** @type {(inputs: Admin_Builds_Sync_Failing_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’ultimo controllo di Steam non è riuscito`)
};

const nl_admin_builds_sync_failing_title = /** @type {(inputs: Admin_Builds_Sync_Failing_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De laatste Steam-controle is mislukt`)
};

const pl_admin_builds_sync_failing_title = /** @type {(inputs: Admin_Builds_Sync_Failing_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostatnie sprawdzenie Steama nie powiodło się`)
};

const pt_admin_builds_sync_failing_title = /** @type {(inputs: Admin_Builds_Sync_Failing_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A última verificação da Steam falhou`)
};

const ru_admin_builds_sync_failing_title = /** @type {(inputs: Admin_Builds_Sync_Failing_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Последняя проверка Steam не удалась`)
};

const sv_admin_builds_sync_failing_title = /** @type {(inputs: Admin_Builds_Sync_Failing_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den senaste Steam-kontrollen misslyckades`)
};

const tr_admin_builds_sync_failing_title = /** @type {(inputs: Admin_Builds_Sync_Failing_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son Steam kontrolü başarısız oldu`)
};

const zh_admin_builds_sync_failing_title = /** @type {(inputs: Admin_Builds_Sync_Failing_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上次检查 Steam 失败`)
};

const ja_admin_builds_sync_failing_title = /** @type {(inputs: Admin_Builds_Sync_Failing_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前回の Steam 確認に失敗しました`)
};

/**
* | output |
* | --- |
* | "The last Steam check failed" |
*
* @param {Admin_Builds_Sync_Failing_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_sync_failing_title = /** @type {((inputs?: Admin_Builds_Sync_Failing_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Sync_Failing_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_sync_failing_title(inputs)
	if (locale === "de") return de_admin_builds_sync_failing_title(inputs)
	if (locale === "fr") return fr_admin_builds_sync_failing_title(inputs)
	if (locale === "it") return it_admin_builds_sync_failing_title(inputs)
	if (locale === "nl") return nl_admin_builds_sync_failing_title(inputs)
	if (locale === "pl") return pl_admin_builds_sync_failing_title(inputs)
	if (locale === "pt") return pt_admin_builds_sync_failing_title(inputs)
	if (locale === "ru") return ru_admin_builds_sync_failing_title(inputs)
	if (locale === "sv") return sv_admin_builds_sync_failing_title(inputs)
	if (locale === "tr") return tr_admin_builds_sync_failing_title(inputs)
	if (locale === "zh") return zh_admin_builds_sync_failing_title(inputs)
	if (locale === "ja") return ja_admin_builds_sync_failing_title(inputs)
	return en_admin_builds_sync_failing_title(inputs)
});
