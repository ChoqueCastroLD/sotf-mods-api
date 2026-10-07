/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Multiplayer_Hint_ServerInputs */

const en_upload_multiplayer_hint_server = /** @type {(inputs: Upload_Multiplayer_Hint_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A server mod runs on the host, so only the answers that apply are shown.`)
};

const es_upload_multiplayer_hint_server = /** @type {(inputs: Upload_Multiplayer_Hint_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un mod de servidor funciona en el anfitrión, así que solo se muestran las respuestas que aplican.`)
};

const de_upload_multiplayer_hint_server = /** @type {(inputs: Upload_Multiplayer_Hint_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Server-Mod läuft beim Host, deshalb werden nur die passenden Antworten angezeigt.`)
};

const fr_upload_multiplayer_hint_server = /** @type {(inputs: Upload_Multiplayer_Hint_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un mod serveur fonctionne chez l’hôte, donc seules les réponses possibles sont affichées.`)
};

const it_upload_multiplayer_hint_server = /** @type {(inputs: Upload_Multiplayer_Hint_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una mod server funziona sull’host, quindi vengono mostrate solo le risposte possibili.`)
};

const nl_upload_multiplayer_hint_server = /** @type {(inputs: Upload_Multiplayer_Hint_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een servermod draait bij de host, dus alleen de antwoorden die kunnen kloppen worden getoond.`)
};

const pl_upload_multiplayer_hint_server = /** @type {(inputs: Upload_Multiplayer_Hint_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod serwerowy działa u hosta, więc pokazujemy tylko odpowiedzi, które mają sens.`)
};

const pt_upload_multiplayer_hint_server = /** @type {(inputs: Upload_Multiplayer_Hint_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um mod de servidor roda no anfitrião, então só aparecem as respostas que fazem sentido.`)
};

const ru_upload_multiplayer_hint_server = /** @type {(inputs: Upload_Multiplayer_Hint_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Серверный мод работает у хоста, поэтому показаны только подходящие ответы.`)
};

const sv_upload_multiplayer_hint_server = /** @type {(inputs: Upload_Multiplayer_Hint_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En servermodd körs hos värden, så bara de svar som passar visas.`)
};

const tr_upload_multiplayer_hint_server = /** @type {(inputs: Upload_Multiplayer_Hint_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sunucu modu ev sahibinde çalışır, bu yüzden yalnızca uygun yanıtlar gösterilir.`)
};

const zh_upload_multiplayer_hint_server = /** @type {(inputs: Upload_Multiplayer_Hint_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`服务器模组在主机上运行，因此只显示适用的选项。`)
};

const ja_upload_multiplayer_hint_server = /** @type {(inputs: Upload_Multiplayer_Hint_ServerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サーバー用MODはホストで動作するため、当てはまる選択肢だけを表示しています。`)
};

/**
* | output |
* | --- |
* | "A server mod runs on the host, so only the answers that apply are shown." |
*
* @param {Upload_Multiplayer_Hint_ServerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_multiplayer_hint_server = /** @type {((inputs?: Upload_Multiplayer_Hint_ServerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Multiplayer_Hint_ServerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_multiplayer_hint_server(inputs)
	if (locale === "de") return de_upload_multiplayer_hint_server(inputs)
	if (locale === "fr") return fr_upload_multiplayer_hint_server(inputs)
	if (locale === "it") return it_upload_multiplayer_hint_server(inputs)
	if (locale === "nl") return nl_upload_multiplayer_hint_server(inputs)
	if (locale === "pl") return pl_upload_multiplayer_hint_server(inputs)
	if (locale === "pt") return pt_upload_multiplayer_hint_server(inputs)
	if (locale === "ru") return ru_upload_multiplayer_hint_server(inputs)
	if (locale === "sv") return sv_upload_multiplayer_hint_server(inputs)
	if (locale === "tr") return tr_upload_multiplayer_hint_server(inputs)
	if (locale === "zh") return zh_upload_multiplayer_hint_server(inputs)
	if (locale === "ja") return ja_upload_multiplayer_hint_server(inputs)
	return en_upload_multiplayer_hint_server(inputs)
});
