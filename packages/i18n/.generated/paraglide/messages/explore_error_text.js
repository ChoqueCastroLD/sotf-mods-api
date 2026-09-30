/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Error_TextInputs */

const en_explore_error_text = /** @type {(inputs: Explore_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We couldn’t load this list. Check your connection and try again.`)
};

const es_explore_error_text = /** @type {(inputs: Explore_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hemos podido cargar esta lista. Revisa tu conexión y vuelve a intentarlo.`)
};

const de_explore_error_text = /** @type {(inputs: Explore_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Liste konnte nicht geladen werden. Prüfe deine Verbindung und versuch es erneut.`)
};

const fr_explore_error_text = /** @type {(inputs: Explore_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de charger cette liste. Vérifiez votre connexion et réessayez.`)
};

const it_explore_error_text = /** @type {(inputs: Explore_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non siamo riusciti a caricare questo elenco. Controlla la connessione e riprova.`)
};

const nl_explore_error_text = /** @type {(inputs: Explore_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We konden deze lijst niet laden. Controleer je verbinding en probeer het opnieuw.`)
};

const pl_explore_error_text = /** @type {(inputs: Explore_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wczytać tej listy. Sprawdź połączenie i spróbuj ponownie.`)
};

const pt_explore_error_text = /** @type {(inputs: Explore_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não conseguimos carregar esta lista. Verifique sua conexão e tente de novo.`)
};

const ru_explore_error_text = /** @type {(inputs: Explore_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить этот список. Проверьте подключение и попробуйте снова.`)
};

const sv_explore_error_text = /** @type {(inputs: Explore_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vi kunde inte ladda listan. Kontrollera anslutningen och försök igen.`)
};

const tr_explore_error_text = /** @type {(inputs: Explore_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu liste yüklenemedi. Bağlantını kontrol edip yeniden dene.`)
};

const zh_explore_error_text = /** @type {(inputs: Explore_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法加载此列表。请检查网络连接后重试。`)
};

const ja_explore_error_text = /** @type {(inputs: Explore_Error_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このリストを読み込めませんでした。接続を確認して、もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "We couldn’t load this list. Check your connection and try again." |
*
* @param {Explore_Error_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_error_text = /** @type {((inputs?: Explore_Error_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Error_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_error_text(inputs)
	if (locale === "de") return de_explore_error_text(inputs)
	if (locale === "fr") return fr_explore_error_text(inputs)
	if (locale === "it") return it_explore_error_text(inputs)
	if (locale === "nl") return nl_explore_error_text(inputs)
	if (locale === "pl") return pl_explore_error_text(inputs)
	if (locale === "pt") return pt_explore_error_text(inputs)
	if (locale === "ru") return ru_explore_error_text(inputs)
	if (locale === "sv") return sv_explore_error_text(inputs)
	if (locale === "tr") return tr_explore_error_text(inputs)
	if (locale === "zh") return zh_explore_error_text(inputs)
	if (locale === "ja") return ja_explore_error_text(inputs)
	return en_explore_error_text(inputs)
});
