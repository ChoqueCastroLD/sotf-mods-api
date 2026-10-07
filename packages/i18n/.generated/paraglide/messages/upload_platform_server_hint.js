/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Platform_Server_HintInputs */

const en_upload_platform_server_hint = /** @type {(inputs: Upload_Platform_Server_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Runs on the host or a dedicated server only.`)
};

const es_upload_platform_server_hint = /** @type {(inputs: Upload_Platform_Server_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo funciona en el anfitrión o en un servidor dedicado.`)
};

const de_upload_platform_server_hint = /** @type {(inputs: Upload_Platform_Server_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läuft nur beim Host oder auf einem dedizierten Server.`)
};

const fr_upload_platform_server_hint = /** @type {(inputs: Upload_Platform_Server_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fonctionne uniquement chez l’hôte ou sur un serveur dédié.`)
};

const it_upload_platform_server_hint = /** @type {(inputs: Upload_Platform_Server_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funziona solo sull’host o su un server dedicato.`)
};

const nl_upload_platform_server_hint = /** @type {(inputs: Upload_Platform_Server_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Draait alleen bij de host of op een dedicated server.`)
};

const pl_upload_platform_server_hint = /** @type {(inputs: Upload_Platform_Server_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Działa tylko u hosta lub na serwerze dedykowanym.`)
};

const pt_upload_platform_server_hint = /** @type {(inputs: Upload_Platform_Server_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Roda só no anfitrião ou em servidor dedicado.`)
};

const ru_upload_platform_server_hint = /** @type {(inputs: Upload_Platform_Server_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Работает только у хоста или на выделенном сервере.`)
};

const sv_upload_platform_server_hint = /** @type {(inputs: Upload_Platform_Server_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Körs bara hos värden eller på en dedikerad server.`)
};

const tr_upload_platform_server_hint = /** @type {(inputs: Upload_Platform_Server_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca ev sahibinde veya özel sunucuda çalışır.`)
};

const zh_upload_platform_server_hint = /** @type {(inputs: Upload_Platform_Server_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`只在主机或专用服务器上运行。`)
};

const ja_upload_platform_server_hint = /** @type {(inputs: Upload_Platform_Server_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ホストまたは専用サーバーでのみ動作します。`)
};

/**
* | output |
* | --- |
* | "Runs on the host or a dedicated server only." |
*
* @param {Upload_Platform_Server_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_platform_server_hint = /** @type {((inputs?: Upload_Platform_Server_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Platform_Server_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_platform_server_hint(inputs)
	if (locale === "de") return de_upload_platform_server_hint(inputs)
	if (locale === "fr") return fr_upload_platform_server_hint(inputs)
	if (locale === "it") return it_upload_platform_server_hint(inputs)
	if (locale === "nl") return nl_upload_platform_server_hint(inputs)
	if (locale === "pl") return pl_upload_platform_server_hint(inputs)
	if (locale === "pt") return pt_upload_platform_server_hint(inputs)
	if (locale === "ru") return ru_upload_platform_server_hint(inputs)
	if (locale === "sv") return sv_upload_platform_server_hint(inputs)
	if (locale === "tr") return tr_upload_platform_server_hint(inputs)
	if (locale === "zh") return zh_upload_platform_server_hint(inputs)
	if (locale === "ja") return ja_upload_platform_server_hint(inputs)
	return en_upload_platform_server_hint(inputs)
});
