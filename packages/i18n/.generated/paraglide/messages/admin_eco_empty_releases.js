/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Eco_Empty_ReleasesInputs */

const en_admin_eco_empty_releases = /** @type {(inputs: Admin_Eco_Empty_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add the RedLoader and RedManager releases players use.`)
};

const es_admin_eco_empty_releases = /** @type {(inputs: Admin_Eco_Empty_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añade las versiones de RedLoader y RedManager que usan los jugadores.`)
};

const de_admin_eco_empty_releases = /** @type {(inputs: Admin_Eco_Empty_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Füge die Versionen von RedLoader und RedManager hinzu, die Spieler nutzen.`)
};

const fr_admin_eco_empty_releases = /** @type {(inputs: Admin_Eco_Empty_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajoutez les versions de RedLoader et RedManager utilisées par les joueurs.`)
};

const it_admin_eco_empty_releases = /** @type {(inputs: Admin_Eco_Empty_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi le versioni di RedLoader e RedManager usate dai giocatori.`)
};

const nl_admin_eco_empty_releases = /** @type {(inputs: Admin_Eco_Empty_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voeg de releases van RedLoader en RedManager toe die spelers gebruiken.`)
};

const pl_admin_eco_empty_releases = /** @type {(inputs: Admin_Eco_Empty_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj wydania RedLoadera i RedManagera, których używają gracze.`)
};

const pt_admin_eco_empty_releases = /** @type {(inputs: Admin_Eco_Empty_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicione as versões do RedLoader e do RedManager que os jogadores usam.`)
};

const ru_admin_eco_empty_releases = /** @type {(inputs: Admin_Eco_Empty_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавьте версии RedLoader и RedManager, которыми пользуются игроки.`)
};

const sv_admin_eco_empty_releases = /** @type {(inputs: Admin_Eco_Empty_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till de versioner av RedLoader och RedManager som spelarna använder.`)
};

const tr_admin_eco_empty_releases = /** @type {(inputs: Admin_Eco_Empty_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyuncuların kullandığı RedLoader ve RedManager sürümlerini ekle.`)
};

const zh_admin_eco_empty_releases = /** @type {(inputs: Admin_Eco_Empty_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加玩家使用的 RedLoader 和 RedManager 版本。`)
};

const ja_admin_eco_empty_releases = /** @type {(inputs: Admin_Eco_Empty_ReleasesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プレイヤーが使っている RedLoader と RedManager のリリースを追加してください。`)
};

/**
* | output |
* | --- |
* | "Add the RedLoader and RedManager releases players use." |
*
* @param {Admin_Eco_Empty_ReleasesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_eco_empty_releases = /** @type {((inputs?: Admin_Eco_Empty_ReleasesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Empty_ReleasesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_eco_empty_releases(inputs)
	if (locale === "de") return de_admin_eco_empty_releases(inputs)
	if (locale === "fr") return fr_admin_eco_empty_releases(inputs)
	if (locale === "it") return it_admin_eco_empty_releases(inputs)
	if (locale === "nl") return nl_admin_eco_empty_releases(inputs)
	if (locale === "pl") return pl_admin_eco_empty_releases(inputs)
	if (locale === "pt") return pt_admin_eco_empty_releases(inputs)
	if (locale === "ru") return ru_admin_eco_empty_releases(inputs)
	if (locale === "sv") return sv_admin_eco_empty_releases(inputs)
	if (locale === "tr") return tr_admin_eco_empty_releases(inputs)
	if (locale === "zh") return zh_admin_eco_empty_releases(inputs)
	if (locale === "ja") return ja_admin_eco_empty_releases(inputs)
	return en_admin_eco_empty_releases(inputs)
});
