/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Dedicated_Implied_YesInputs */

const en_upload_dedicated_implied_yes = /** @type {(inputs: Upload_Dedicated_Implied_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yes. A server mod always runs on the dedicated server.`)
};

const es_upload_dedicated_implied_yes = /** @type {(inputs: Upload_Dedicated_Implied_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sí. Un mod de servidor siempre funciona en el servidor dedicado.`)
};

const de_upload_dedicated_implied_yes = /** @type {(inputs: Upload_Dedicated_Implied_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ja. Ein Server-Mod läuft immer auf dem dedizierten Server.`)
};

const fr_upload_dedicated_implied_yes = /** @type {(inputs: Upload_Dedicated_Implied_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oui. Un mod serveur fonctionne toujours sur le serveur dédié.`)
};

const it_upload_dedicated_implied_yes = /** @type {(inputs: Upload_Dedicated_Implied_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sì. Una mod server funziona sempre sul server dedicato.`)
};

const nl_upload_dedicated_implied_yes = /** @type {(inputs: Upload_Dedicated_Implied_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ja. Een servermod draait altijd op de dedicated server.`)
};

const pl_upload_dedicated_implied_yes = /** @type {(inputs: Upload_Dedicated_Implied_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tak. Mod serwerowy zawsze działa na serwerze dedykowanym.`)
};

const pt_upload_dedicated_implied_yes = /** @type {(inputs: Upload_Dedicated_Implied_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sim. Um mod de servidor sempre roda no servidor dedicado.`)
};

const ru_upload_dedicated_implied_yes = /** @type {(inputs: Upload_Dedicated_Implied_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Да. Серверный мод всегда работает на выделенном сервере.`)
};

const sv_upload_dedicated_implied_yes = /** @type {(inputs: Upload_Dedicated_Implied_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ja. En servermodd körs alltid på den dedikerade servern.`)
};

const tr_upload_dedicated_implied_yes = /** @type {(inputs: Upload_Dedicated_Implied_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Evet. Sunucu modu her zaman özel sunucuda çalışır.`)
};

const zh_upload_dedicated_implied_yes = /** @type {(inputs: Upload_Dedicated_Implied_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`是。服务器模组总是在专用服务器上运行。`)
};

const ja_upload_dedicated_implied_yes = /** @type {(inputs: Upload_Dedicated_Implied_YesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`はい。サーバー用MODは常に専用サーバーで動作します。`)
};

/**
* | output |
* | --- |
* | "Yes. A server mod always runs on the dedicated server." |
*
* @param {Upload_Dedicated_Implied_YesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_dedicated_implied_yes = /** @type {((inputs?: Upload_Dedicated_Implied_YesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Dedicated_Implied_YesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_dedicated_implied_yes(inputs)
	if (locale === "de") return de_upload_dedicated_implied_yes(inputs)
	if (locale === "fr") return fr_upload_dedicated_implied_yes(inputs)
	if (locale === "it") return it_upload_dedicated_implied_yes(inputs)
	if (locale === "nl") return nl_upload_dedicated_implied_yes(inputs)
	if (locale === "pl") return pl_upload_dedicated_implied_yes(inputs)
	if (locale === "pt") return pt_upload_dedicated_implied_yes(inputs)
	if (locale === "ru") return ru_upload_dedicated_implied_yes(inputs)
	if (locale === "sv") return sv_upload_dedicated_implied_yes(inputs)
	if (locale === "tr") return tr_upload_dedicated_implied_yes(inputs)
	if (locale === "zh") return zh_upload_dedicated_implied_yes(inputs)
	if (locale === "ja") return ja_upload_dedicated_implied_yes(inputs)
	return en_upload_dedicated_implied_yes(inputs)
});
