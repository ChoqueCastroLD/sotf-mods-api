/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Empty_TextInputs */

const en_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Register the patch players are on today so field reports have something to point at.`)
};

const es_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registra el parche que usan hoy los jugadores para que los reportes de campo tengan a qué referirse.`)
};

const de_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registriere den Patch, den die Spieler heute nutzen, damit Feldberichte sich darauf beziehen können.`)
};

const fr_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrez le patch utilisé aujourd’hui par les joueurs pour que les rapports de terrain puissent s’y référer.`)
};

const it_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registra la patch che i giocatori usano oggi, così i rapporti sul campo hanno un riferimento.`)
};

const nl_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registreer de patch die spelers vandaag gebruiken, zodat veldrapporten ergens naar kunnen verwijzen.`)
};

const pl_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zarejestruj łatkę, na której gracze są dziś, żeby raporty terenowe miały do czego się odnosić.`)
};

const pt_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registre o patch que os jogadores usam hoje para que os relatórios de campo tenham uma referência.`)
};

const ru_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавьте патч, на котором сейчас играют, чтобы полевым отчётам было на что ссылаться.`)
};

const sv_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Registrera patchen som spelarna kör i dag så att fältrapporter har något att hänvisa till.`)
};

const tr_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyuncuların bugün kullandığı yamayı kaydet ki saha raporları ona dayanabilsin.`)
};

const zh_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登记玩家今天所用的补丁，让实地报告有据可依。`)
};

const ja_admin_builds_empty_text = /** @type {(inputs: Admin_Builds_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プレイヤーが今遊んでいるパッチを登録して、フィールドレポートの参照先を作りましょう。`)
};

/**
* | output |
* | --- |
* | "Register the patch players are on today so field reports have something to point at." |
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
