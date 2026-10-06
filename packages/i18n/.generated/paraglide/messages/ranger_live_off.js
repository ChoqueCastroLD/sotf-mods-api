/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Live_OffInputs */

const en_ranger_live_off = /** @type {(inputs: Ranger_Live_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updates paused. The list refreshes when the connection is back.`)
};

const es_ranger_live_off = /** @type {(inputs: Ranger_Live_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualizaciones en pausa. La lista se refresca cuando vuelva la conexión.`)
};

const de_ranger_live_off = /** @type {(inputs: Ranger_Live_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktualisierungen pausiert. Die Liste lädt neu, sobald die Verbindung zurück ist.`)
};

const fr_ranger_live_off = /** @type {(inputs: Ranger_Live_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mises à jour en pause. La liste se rafraîchit au retour de la connexion.`)
};

const it_ranger_live_off = /** @type {(inputs: Ranger_Live_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiornamenti in pausa. L’elenco si aggiorna quando torna la connessione.`)
};

const nl_ranger_live_off = /** @type {(inputs: Ranger_Live_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updates gepauzeerd. De lijst ververst zodra de verbinding terug is.`)
};

const pl_ranger_live_off = /** @type {(inputs: Ranger_Live_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktualizacje wstrzymane. Lista odświeży się po powrocie połączenia.`)
};

const pt_ranger_live_off = /** @type {(inputs: Ranger_Live_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualizações pausadas. A lista atualiza quando a conexão voltar.`)
};

const ru_ranger_live_off = /** @type {(inputs: Ranger_Live_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обновления приостановлены. Список обновится, когда вернётся соединение.`)
};

const sv_ranger_live_off = /** @type {(inputs: Ranger_Live_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppdateringar pausade. Listan uppdateras när anslutningen är tillbaka.`)
};

const tr_ranger_live_off = /** @type {(inputs: Ranger_Live_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncellemeler duraklatıldı. Bağlantı geri geldiğinde liste yenilenir.`)
};

const zh_ranger_live_off = /** @type {(inputs: Ranger_Live_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新已暂停。连接恢复后列表会自动刷新。`)
};

const ja_ranger_live_off = /** @type {(inputs: Ranger_Live_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新を一時停止中です。接続が戻るとリストが更新されます。`)
};

/**
* | output |
* | --- |
* | "Updates paused. The list refreshes when the connection is back." |
*
* @param {Ranger_Live_OffInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_live_off = /** @type {((inputs?: Ranger_Live_OffInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Live_OffInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_live_off(inputs)
	if (locale === "de") return de_ranger_live_off(inputs)
	if (locale === "fr") return fr_ranger_live_off(inputs)
	if (locale === "it") return it_ranger_live_off(inputs)
	if (locale === "nl") return nl_ranger_live_off(inputs)
	if (locale === "pl") return pl_ranger_live_off(inputs)
	if (locale === "pt") return pt_ranger_live_off(inputs)
	if (locale === "ru") return ru_ranger_live_off(inputs)
	if (locale === "sv") return sv_ranger_live_off(inputs)
	if (locale === "tr") return tr_ranger_live_off(inputs)
	if (locale === "zh") return zh_ranger_live_off(inputs)
	if (locale === "ja") return ja_ranger_live_off(inputs)
	return en_ranger_live_off(inputs)
});
