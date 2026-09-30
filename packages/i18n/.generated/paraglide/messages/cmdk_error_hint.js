/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Error_HintInputs */

const en_cmdk_error_hint = /** @type {(inputs: Cmdk_Error_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Check your connection and try again. Actions and recent items still work.`)
};

const es_cmdk_error_hint = /** @type {(inputs: Cmdk_Error_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisa tu conexión y vuelve a intentarlo. Las acciones y los recientes siguen funcionando.`)
};

const de_cmdk_error_hint = /** @type {(inputs: Cmdk_Error_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prüf deine Verbindung und versuch es erneut. Aktionen und der Verlauf funktionieren weiterhin.`)
};

const fr_cmdk_error_hint = /** @type {(inputs: Cmdk_Error_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifiez votre connexion et réessayez. Les actions et les éléments récents fonctionnent toujours.`)
};

const it_cmdk_error_hint = /** @type {(inputs: Cmdk_Error_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controlla la connessione e riprova. Le azioni e i recenti funzionano comunque.`)
};

const nl_cmdk_error_hint = /** @type {(inputs: Cmdk_Error_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controleer je verbinding en probeer het opnieuw. Acties en recente items werken nog steeds.`)
};

const pl_cmdk_error_hint = /** @type {(inputs: Cmdk_Error_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprawdź połączenie i spróbuj ponownie. Akcje i ostatnie elementy nadal działają.`)
};

const pt_cmdk_error_hint = /** @type {(inputs: Cmdk_Error_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifique sua conexão e tente de novo. As ações e os itens recentes continuam funcionando.`)
};

const ru_cmdk_error_hint = /** @type {(inputs: Cmdk_Error_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверьте подключение и попробуйте ещё раз. Действия и недавние элементы по-прежнему работают.`)
};

const sv_cmdk_error_hint = /** @type {(inputs: Cmdk_Error_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontrollera anslutningen och försök igen. Åtgärder och senaste objekt fungerar fortfarande.`)
};

const tr_cmdk_error_hint = /** @type {(inputs: Cmdk_Error_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlantını kontrol edip tekrar dene. Eylemler ve son açılanlar çalışmaya devam ediyor.`)
};

const zh_cmdk_error_hint = /** @type {(inputs: Cmdk_Error_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请检查网络连接后重试。操作和最近记录仍可使用。`)
};

const ja_cmdk_error_hint = /** @type {(inputs: Cmdk_Error_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`接続を確認してもう一度お試しください。アクションと履歴は引き続き使えます。`)
};

/**
* | output |
* | --- |
* | "Check your connection and try again. Actions and recent items still work." |
*
* @param {Cmdk_Error_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_error_hint = /** @type {((inputs?: Cmdk_Error_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Error_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_error_hint(inputs)
	if (locale === "de") return de_cmdk_error_hint(inputs)
	if (locale === "fr") return fr_cmdk_error_hint(inputs)
	if (locale === "it") return it_cmdk_error_hint(inputs)
	if (locale === "nl") return nl_cmdk_error_hint(inputs)
	if (locale === "pl") return pl_cmdk_error_hint(inputs)
	if (locale === "pt") return pt_cmdk_error_hint(inputs)
	if (locale === "ru") return ru_cmdk_error_hint(inputs)
	if (locale === "sv") return sv_cmdk_error_hint(inputs)
	if (locale === "tr") return tr_cmdk_error_hint(inputs)
	if (locale === "zh") return zh_cmdk_error_hint(inputs)
	if (locale === "ja") return ja_cmdk_error_hint(inputs)
	return en_cmdk_error_hint(inputs)
});
