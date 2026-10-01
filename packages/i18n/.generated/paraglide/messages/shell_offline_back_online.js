/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Offline_Back_OnlineInputs */

const en_shell_offline_back_online = /** @type {(inputs: Shell_Offline_Back_OnlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You’re back online. Reloading…`)
};

const es_shell_offline_back_online = /** @type {(inputs: Shell_Offline_Back_OnlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Has vuelto a tener conexión. Recargando…`)
};

const de_shell_offline_back_online = /** @type {(inputs: Shell_Offline_Back_OnlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du bist wieder online. Seite wird neu geladen…`)
};

const fr_shell_offline_back_online = /** @type {(inputs: Shell_Offline_Back_OnlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous êtes de nouveau en ligne. Rechargement…`)
};

const it_shell_offline_back_online = /** @type {(inputs: Shell_Offline_Back_OnlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sei di nuovo online. Ricarico…`)
};

const nl_shell_offline_back_online = /** @type {(inputs: Shell_Offline_Back_OnlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je bent weer online. Opnieuw laden…`)
};

const pl_shell_offline_back_online = /** @type {(inputs: Shell_Offline_Back_OnlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Znów jesteś online. Wczytuję ponownie…`)
};

const pt_shell_offline_back_online = /** @type {(inputs: Shell_Offline_Back_OnlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você voltou a ficar online. Recarregando…`)
};

const ru_shell_offline_back_online = /** @type {(inputs: Shell_Offline_Back_OnlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Связь восстановлена. Перезагружаем…`)
};

const sv_shell_offline_back_online = /** @type {(inputs: Shell_Offline_Back_OnlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du är online igen. Laddar om…`)
};

const tr_shell_offline_back_online = /** @type {(inputs: Shell_Offline_Back_OnlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeniden çevrimiçisin. Sayfa yenileniyor…`)
};

const zh_shell_offline_back_online = /** @type {(inputs: Shell_Offline_Back_OnlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已恢复连接，正在重新加载…`)
};

const ja_shell_offline_back_online = /** @type {(inputs: Shell_Offline_Back_OnlineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`オンラインに戻りました。再読み込みしています…`)
};

/**
* | output |
* | --- |
* | "You’re back online. Reloading…" |
*
* @param {Shell_Offline_Back_OnlineInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_offline_back_online = /** @type {((inputs?: Shell_Offline_Back_OnlineInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Offline_Back_OnlineInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_offline_back_online(inputs)
	if (locale === "de") return de_shell_offline_back_online(inputs)
	if (locale === "fr") return fr_shell_offline_back_online(inputs)
	if (locale === "it") return it_shell_offline_back_online(inputs)
	if (locale === "nl") return nl_shell_offline_back_online(inputs)
	if (locale === "pl") return pl_shell_offline_back_online(inputs)
	if (locale === "pt") return pt_shell_offline_back_online(inputs)
	if (locale === "ru") return ru_shell_offline_back_online(inputs)
	if (locale === "sv") return sv_shell_offline_back_online(inputs)
	if (locale === "tr") return tr_shell_offline_back_online(inputs)
	if (locale === "zh") return zh_shell_offline_back_online(inputs)
	if (locale === "ja") return ja_shell_offline_back_online(inputs)
	return en_shell_offline_back_online(inputs)
});
