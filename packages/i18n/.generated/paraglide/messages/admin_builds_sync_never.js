/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Sync_NeverInputs */

const en_admin_builds_sync_never = /** @type {(inputs: Admin_Builds_Sync_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam has not been checked yet. The check runs every 30 minutes.`)
};

const es_admin_builds_sync_never = /** @type {(inputs: Admin_Builds_Sync_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todavía no se ha consultado Steam. La consulta se hace cada 30 minutos.`)
};

const de_admin_builds_sync_never = /** @type {(inputs: Admin_Builds_Sync_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam wurde noch nicht geprüft. Die Prüfung läuft alle 30 Minuten.`)
};

const fr_admin_builds_sync_never = /** @type {(inputs: Admin_Builds_Sync_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam n’a pas encore été consulté. La vérification a lieu toutes les 30 minutes.`)
};

const it_admin_builds_sync_never = /** @type {(inputs: Admin_Builds_Sync_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam non è ancora stato controllato. Il controllo avviene ogni 30 minuti.`)
};

const nl_admin_builds_sync_never = /** @type {(inputs: Admin_Builds_Sync_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam is nog niet gecontroleerd. De controle loopt elke 30 minuten.`)
};

const pl_admin_builds_sync_never = /** @type {(inputs: Admin_Builds_Sync_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam nie był jeszcze sprawdzany. Sprawdzanie odbywa się co 30 minut.`)
};

const pt_admin_builds_sync_never = /** @type {(inputs: Admin_Builds_Sync_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A Steam ainda não foi consultada. A verificação acontece a cada 30 minutos.`)
};

const ru_admin_builds_sync_never = /** @type {(inputs: Admin_Builds_Sync_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam ещё не проверялся. Проверка выполняется каждые 30 минут.`)
};

const sv_admin_builds_sync_never = /** @type {(inputs: Admin_Builds_Sync_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam har inte kontrollerats än. Kontrollen körs var 30:e minut.`)
};

const tr_admin_builds_sync_never = /** @type {(inputs: Admin_Builds_Sync_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam henüz kontrol edilmedi. Kontrol her 30 dakikada bir yapılır.`)
};

const zh_admin_builds_sync_never = /** @type {(inputs: Admin_Builds_Sync_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`尚未检查过 Steam。每 30 分钟检查一次。`)
};

const ja_admin_builds_sync_never = /** @type {(inputs: Admin_Builds_Sync_NeverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Steam はまだ確認されていません。確認は 30 分ごとに行われます。`)
};

/**
* | output |
* | --- |
* | "Steam has not been checked yet. The check runs every 30 minutes." |
*
* @param {Admin_Builds_Sync_NeverInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_sync_never = /** @type {((inputs?: Admin_Builds_Sync_NeverInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Sync_NeverInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_sync_never(inputs)
	if (locale === "de") return de_admin_builds_sync_never(inputs)
	if (locale === "fr") return fr_admin_builds_sync_never(inputs)
	if (locale === "it") return it_admin_builds_sync_never(inputs)
	if (locale === "nl") return nl_admin_builds_sync_never(inputs)
	if (locale === "pl") return pl_admin_builds_sync_never(inputs)
	if (locale === "pt") return pt_admin_builds_sync_never(inputs)
	if (locale === "ru") return ru_admin_builds_sync_never(inputs)
	if (locale === "sv") return sv_admin_builds_sync_never(inputs)
	if (locale === "tr") return tr_admin_builds_sync_never(inputs)
	if (locale === "zh") return zh_admin_builds_sync_never(inputs)
	if (locale === "ja") return ja_admin_builds_sync_never(inputs)
	return en_admin_builds_sync_never(inputs)
});
