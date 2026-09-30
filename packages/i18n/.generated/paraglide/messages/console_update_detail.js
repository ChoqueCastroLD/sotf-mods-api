/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Update_DetailInputs */

const en_console_update_detail = /** @type {(inputs: Console_Update_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We updated SOTF Mods while you were here. Reload to get the latest version.`)
};

const es_console_update_detail = /** @type {(inputs: Console_Update_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualizamos SOTF Mods mientras estabas aquí. Recarga para tener la última versión.`)
};

const de_console_update_detail = /** @type {(inputs: Console_Update_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wir haben SOTF Mods aktualisiert, während du hier warst. Lade neu, um die neueste Version zu bekommen.`)
};

const fr_console_update_detail = /** @type {(inputs: Console_Update_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nous avons mis à jour SOTF Mods pendant votre visite. Rechargez pour obtenir la dernière version.`)
};

const it_console_update_detail = /** @type {(inputs: Console_Update_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abbiamo aggiornato SOTF Mods mentre eri qui. Ricarica per avere l’ultima versione.`)
};

const nl_console_update_detail = /** @type {(inputs: Console_Update_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We hebben SOTF Mods bijgewerkt terwijl je hier was. Herlaad om de nieuwste versie te krijgen.`)
};

const pl_console_update_detail = /** @type {(inputs: Console_Update_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaktualizowaliśmy SOTF Mods, gdy tu byłeś. Odśwież, aby mieć najnowszą wersję.`)
};

const pt_console_update_detail = /** @type {(inputs: Console_Update_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualizamos o SOTF Mods enquanto você estava aqui. Recarregue para obter a versão mais recente.`)
};

const ru_console_update_detail = /** @type {(inputs: Console_Update_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мы обновили SOTF Mods, пока вы были здесь. Перезагрузите страницу, чтобы получить новую версию.`)
};

const sv_console_update_detail = /** @type {(inputs: Console_Update_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vi uppdaterade SOTF Mods medan du var här. Ladda om för att få den senaste versionen.`)
};

const tr_console_update_detail = /** @type {(inputs: Console_Update_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sen buradayken SOTF Mods’u güncelledik. En son sürümü almak için yeniden yükle.`)
};

const zh_console_update_detail = /** @type {(inputs: Console_Update_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你浏览期间我们更新了 SOTF Mods。重新加载即可获得最新版本。`)
};

const ja_console_update_detail = /** @type {(inputs: Console_Update_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`閲覧中に SOTF Mods を更新しました。再読み込みして最新版を利用してください。`)
};

/**
* | output |
* | --- |
* | "We updated SOTF Mods while you were here. Reload to get the latest version." |
*
* @param {Console_Update_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_update_detail = /** @type {((inputs?: Console_Update_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Update_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_update_detail(inputs)
	if (locale === "de") return de_console_update_detail(inputs)
	if (locale === "fr") return fr_console_update_detail(inputs)
	if (locale === "it") return it_console_update_detail(inputs)
	if (locale === "nl") return nl_console_update_detail(inputs)
	if (locale === "pl") return pl_console_update_detail(inputs)
	if (locale === "pt") return pt_console_update_detail(inputs)
	if (locale === "ru") return ru_console_update_detail(inputs)
	if (locale === "sv") return sv_console_update_detail(inputs)
	if (locale === "tr") return tr_console_update_detail(inputs)
	if (locale === "zh") return zh_console_update_detail(inputs)
	if (locale === "ja") return ja_console_update_detail(inputs)
	return en_console_update_detail(inputs)
});
