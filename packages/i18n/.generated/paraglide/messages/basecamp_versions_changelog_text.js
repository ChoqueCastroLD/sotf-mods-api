/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Versions_Changelog_TextInputs */

const en_basecamp_versions_changelog_text = /** @type {(inputs: Basecamp_Versions_Changelog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown works. Players see it on the mod page and in the update signal.`)
};

const es_basecamp_versions_changelog_text = /** @type {(inputs: Basecamp_Versions_Changelog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admite Markdown. Los jugadores lo ven en la página del mod y en la señal de actualización.`)
};

const de_basecamp_versions_changelog_text = /** @type {(inputs: Basecamp_Versions_Changelog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown funktioniert. Spieler sehen es auf der Mod-Seite und im Update-Signal.`)
};

const fr_basecamp_versions_changelog_text = /** @type {(inputs: Basecamp_Versions_Changelog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le Markdown fonctionne. Les joueurs le voient sur la page du mod et dans le signal de mise à jour.`)
};

const it_basecamp_versions_changelog_text = /** @type {(inputs: Basecamp_Versions_Changelog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supporta Markdown. I giocatori lo vedono nella pagina della mod e nel segnale di aggiornamento.`)
};

const nl_basecamp_versions_changelog_text = /** @type {(inputs: Basecamp_Versions_Changelog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown werkt. Spelers zien het op de modpagina en in het updatesignaal.`)
};

const pl_basecamp_versions_changelog_text = /** @type {(inputs: Basecamp_Versions_Changelog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Działa Markdown. Gracze widzą to na stronie moda i w sygnale aktualizacji.`)
};

const pt_basecamp_versions_changelog_text = /** @type {(inputs: Basecamp_Versions_Changelog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aceita Markdown. Os jogadores veem na página do mod e no sinal de atualização.`)
};

const ru_basecamp_versions_changelog_text = /** @type {(inputs: Basecamp_Versions_Changelog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поддерживается Markdown. Игроки видят это на странице мода и в сигнале об обновлении.`)
};

const sv_basecamp_versions_changelog_text = /** @type {(inputs: Basecamp_Versions_Changelog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown fungerar. Spelarna ser det på moddsidan och i uppdateringssignalen.`)
};

const tr_basecamp_versions_changelog_text = /** @type {(inputs: Basecamp_Versions_Changelog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown kullanılabilir. Oyuncular bunu mod sayfasında ve güncelleme sinyalinde görür.`)
};

const zh_basecamp_versions_changelog_text = /** @type {(inputs: Basecamp_Versions_Changelog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`支持 Markdown。玩家会在模组页面和更新信号中看到。`)
};

const ja_basecamp_versions_changelog_text = /** @type {(inputs: Basecamp_Versions_Changelog_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown が使えます。MOD ページと更新シグナルに表示されます。`)
};

/**
* | output |
* | --- |
* | "Markdown works. Players see it on the mod page and in the update signal." |
*
* @param {Basecamp_Versions_Changelog_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_changelog_text = /** @type {((inputs?: Basecamp_Versions_Changelog_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_Changelog_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_changelog_text(inputs)
	if (locale === "de") return de_basecamp_versions_changelog_text(inputs)
	if (locale === "fr") return fr_basecamp_versions_changelog_text(inputs)
	if (locale === "it") return it_basecamp_versions_changelog_text(inputs)
	if (locale === "nl") return nl_basecamp_versions_changelog_text(inputs)
	if (locale === "pl") return pl_basecamp_versions_changelog_text(inputs)
	if (locale === "pt") return pt_basecamp_versions_changelog_text(inputs)
	if (locale === "ru") return ru_basecamp_versions_changelog_text(inputs)
	if (locale === "sv") return sv_basecamp_versions_changelog_text(inputs)
	if (locale === "tr") return tr_basecamp_versions_changelog_text(inputs)
	if (locale === "zh") return zh_basecamp_versions_changelog_text(inputs)
	if (locale === "ja") return ja_basecamp_versions_changelog_text(inputs)
	return en_basecamp_versions_changelog_text(inputs)
});
