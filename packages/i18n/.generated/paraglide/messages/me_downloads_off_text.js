/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Downloads_Off_TextInputs */

const en_me_downloads_off_text = /** @type {(inputs: Me_Downloads_Off_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New downloads are not recorded, so update alerts here and in Following can’t compare versions. Turn it back on at any time.`)
};

const es_me_downloads_off_text = /** @type {(inputs: Me_Downloads_Off_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las descargas nuevas no se registran, así que los avisos de actualización de aquí y de Siguiendo no pueden comparar versiones. Puedes volver a activarlo cuando quieras.`)
};

const de_me_downloads_off_text = /** @type {(inputs: Me_Downloads_Off_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Downloads werden nicht erfasst, daher können die Update-Hinweise hier und unter „Folge ich“ keine Versionen vergleichen. Du kannst den Verlauf jederzeit wieder einschalten.`)
};

const fr_me_downloads_off_text = /** @type {(inputs: Me_Downloads_Off_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les nouveaux téléchargements ne sont pas enregistrés : les alertes de mise à jour ici et dans Suivis ne peuvent donc pas comparer les versions. Vous pouvez le réactiver à tout moment.`)
};

const it_me_downloads_off_text = /** @type {(inputs: Me_Downloads_Off_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I nuovi download non vengono registrati, quindi gli avvisi di aggiornamento qui e in Seguiti non possono confrontare le versioni. Puoi riattivarla quando vuoi.`)
};

const nl_me_downloads_off_text = /** @type {(inputs: Me_Downloads_Off_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe downloads worden niet vastgelegd, dus de updatemeldingen hier en bij Volgend kunnen geen versies vergelijken. Je kunt hem altijd weer aanzetten.`)
};

const pl_me_downloads_off_text = /** @type {(inputs: Me_Downloads_Off_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowe pobrania nie są zapisywane, więc powiadomienia o aktualizacjach tutaj i w obserwowanych nie mogą porównać wersji. Możesz ją włączyć w każdej chwili.`)
};

const pt_me_downloads_off_text = /** @type {(inputs: Me_Downloads_Off_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novos downloads não são registrados, então os avisos de atualização aqui e em Seguindo não conseguem comparar versões. Você pode reativá-lo quando quiser.`)
};

const ru_me_downloads_off_text = /** @type {(inputs: Me_Downloads_Off_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новые загрузки не записываются, поэтому уведомления об обновлениях здесь и в подписках не могут сравнить версии. Историю можно включить в любой момент.`)
};

const sv_me_downloads_off_text = /** @type {(inputs: Me_Downloads_Off_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nya nedladdningar sparas inte, så uppdateringsaviseringarna här och under Följer kan inte jämföra versioner. Du kan slå på den igen när du vill.`)
};

const tr_me_downloads_off_text = /** @type {(inputs: Me_Downloads_Off_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni indirmeler kaydedilmiyor, bu yüzden buradaki ve takip edilenlerdeki güncelleme uyarıları sürümleri karşılaştıramıyor. İstediğin zaman yeniden açabilirsin.`)
};

const zh_me_downloads_off_text = /** @type {(inputs: Me_Downloads_Off_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新的下载不会被记录，因此这里和关注页中的更新提醒无法比较版本。你可以随时重新开启。`)
};

const ja_me_downloads_off_text = /** @type {(inputs: Me_Downloads_Off_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいダウンロードは記録されないため、ここやフォロー中のアップデート通知でバージョンを比較できません。いつでもオンに戻せます。`)
};

/**
* | output |
* | --- |
* | "New downloads are not recorded, so update alerts here and in Following can’t compare versions. Turn it back on at any time." |
*
* @param {Me_Downloads_Off_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_downloads_off_text = /** @type {((inputs?: Me_Downloads_Off_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Downloads_Off_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_downloads_off_text(inputs)
	if (locale === "de") return de_me_downloads_off_text(inputs)
	if (locale === "fr") return fr_me_downloads_off_text(inputs)
	if (locale === "it") return it_me_downloads_off_text(inputs)
	if (locale === "nl") return nl_me_downloads_off_text(inputs)
	if (locale === "pl") return pl_me_downloads_off_text(inputs)
	if (locale === "pt") return pt_me_downloads_off_text(inputs)
	if (locale === "ru") return ru_me_downloads_off_text(inputs)
	if (locale === "sv") return sv_me_downloads_off_text(inputs)
	if (locale === "tr") return tr_me_downloads_off_text(inputs)
	if (locale === "zh") return zh_me_downloads_off_text(inputs)
	if (locale === "ja") return ja_me_downloads_off_text(inputs)
	return en_me_downloads_off_text(inputs)
});
